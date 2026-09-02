function Alarm({
  alarmTime,
  setAlarmTime,
  alarmEnabled,
  setAlarmEnabled,
}) {
  function handleAlarmToggle() {
    if (!alarmTime) {
      alert("Please select an alarm time first.");
      return;
    }

    setAlarmEnabled(!alarmEnabled);
  }

  function clearAlarm() {
    setAlarmTime("");
    setAlarmEnabled(false);
  }

  return (
    <div className="clock-card alarm-card">

      <div className="card-label">
        ALARM
      </div>

      <h2>
        Set an Alarm
      </h2>

      <p className="alarm-description">
        Set a reminder for a specific time.
      </p>

      <div className="alarm-controls">

        <input
          type="time"
          value={alarmTime}
          onChange={(event) =>
            setAlarmTime(event.target.value)
          }
        />

        <button
          className={`alarm-button ${
            alarmEnabled
              ? "alarm-active"
              : ""
          }`}
          onClick={handleAlarmToggle}
        >
          {alarmEnabled
            ? "Alarm On"
            : "Set Alarm"}
        </button>

        <button
          className="clear-alarm"
          onClick={clearAlarm}
        >
          Clear
        </button>

      </div>

      <div className="alarm-status">

        <span
          className={`status-dot ${
            alarmEnabled
              ? "active"
              : ""
          }`}
        ></span>

        {alarmEnabled
          ? `Alarm set for ${alarmTime}`
          : "No alarm is currently active"}

      </div>

    </div>
  );
}

export default Alarm;