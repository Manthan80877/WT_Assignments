function DigitalClock({
  time,
  use24Hour,
  showSeconds,
}) {
  return (
    <div className="clock-card digital-card">

      <div className="card-label">
        DIGITAL CLOCK
      </div>

      <div className="digital-time">

        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: showSeconds
            ? "2-digit"
            : undefined,
          hour12: !use24Hour,
        })}

      </div>

      <div className="digital-date">

        {time.toLocaleDateString([], {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}

      </div>

    </div>
  );
}

export default DigitalClock;