function MiniAnalogClock({ time, timeZone }) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(time);

  const values = {};

  parts.forEach((part) => {
    values[part.type] = Number(part.value);
  });

  const seconds = values.second;
  const minutes = values.minute;
  const hours = values.hour;

  const secondAngle = seconds * 6;

  const minuteAngle =
    minutes * 6 + seconds * 0.1;

  const hourAngle =
    (hours % 12) * 30 +
    minutes * 0.5;

  return (
    <div className="mini-analog-clock">

      {Array.from({ length: 12 }).map(
        (_, index) => (
          <span
            key={index}
            className="mini-tick"
            style={{
              transform: `
                rotate(${index * 30}deg)
                translateY(-50%)
              `,
            }}
          />
        )
      )}

      <div
        className="mini-hand mini-hour-hand"
        style={{
          transform: `
            translateX(-50%)
            rotate(${hourAngle}deg)
          `,
        }}
      />

      <div
        className="mini-hand mini-minute-hand"
        style={{
          transform: `
            translateX(-50%)
            rotate(${minuteAngle}deg)
          `,
        }}
      />

      <div
        className="mini-hand mini-second-hand"
        style={{
          transform: `
            translateX(-50%)
            rotate(${secondAngle}deg)
          `,
        }}
      />

      <div className="mini-clock-center" />

      <span className="mini-number mini-12">
        12
      </span>

      <span className="mini-number mini-3">
        3
      </span>

      <span className="mini-number mini-6">
        6
      </span>

      <span className="mini-number mini-9">
        9
      </span>

    </div>
  );
}


function WorldClock({
  time,
  timeZones,
  onRemove,
  use24Hour,
  showSeconds,
}) {
  return (
    <div className="world-clock-section">

      <div className="section-heading">

        <div className="card-label">
          WORLD CLOCK
        </div>

        <h2>
          Global Time Zones
        </h2>

      </div>


      <div className="world-clock-grid">

        {timeZones.map((zone) => (

          <div
            className="world-card"
            key={zone.id}
          >

            <div className="world-card-header">

              <div>

                <div className="world-country">
                  {zone.country}
                </div>

                <h3>
                  {zone.city}
                </h3>

              </div>


              {zone.id !== "india" && (
                <button
                  className="remove-zone"
                  onClick={() =>
                    onRemove(zone.id)
                  }
                >
                  ×
                </button>
              )}

            </div>


            <MiniAnalogClock
              time={time}
              timeZone={zone.timeZone}
            />


            <div className="world-time">

              {time.toLocaleTimeString([], {
                timeZone: zone.timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: showSeconds
                  ? "2-digit"
                  : undefined,
                hour12: !use24Hour,
              })}

            </div>


            <div className="world-date">

              {time.toLocaleDateString([], {
                timeZone: zone.timeZone,
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}

            </div>


            <div className="timezone-name">
              {zone.timeZone}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WorldClock;