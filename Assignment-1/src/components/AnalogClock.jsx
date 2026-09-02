function AnalogClock({ time }) {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = seconds * 6;

  const minuteAngle =
    minutes * 6 + seconds * 0.1;

  const hourAngle =
    (hours % 12) * 30 +
    minutes * 0.5;

  return (
    <div className="analog-card">

      <div className="card-label">
        ANALOG CLOCK
      </div>

      <div className="analog-clock">

        {/* 60 clock ticks */}

        {Array.from({ length: 60 }).map(
          (_, index) => (
            <span
              key={index}
              className={`clock-tick ${
                index % 5 === 0
                  ? "hour-tick"
                  : ""
              }`}
              style={{
                transform: `
                  translateX(-50%)
                  rotate(${index * 6}deg)
                `,
              }}
            />
          )
        )}

        {/* Numbers */}

        <div className="number number-12">
          12
        </div>

        <div className="number number-3">
          3
        </div>

        <div className="number number-6">
          6
        </div>

        <div className="number number-9">
          9
        </div>


        {/* Hour hand */}

        <div
          className="hand hour-hand"
          style={{
            transform: `
              translateX(-50%)
              rotate(${hourAngle}deg)
            `,
          }}
        />


        {/* Minute hand */}

        <div
          className="hand minute-hand"
          style={{
            transform: `
              translateX(-50%)
              rotate(${minuteAngle}deg)
            `,
          }}
        />


        {/* Second hand */}

        <div
          className="hand second-hand"
          style={{
            transform: `
              translateX(-50%)
              rotate(${secondAngle}deg)
            `,
          }}
        />


        {/* Center */}

        <div className="clock-center" />

      </div>

    </div>
  );
}

export default AnalogClock;