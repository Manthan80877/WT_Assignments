import { useEffect, useState } from "react";

import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";
import WorldClock from "./components/WorldClock";
import Alarm from "./components/Alarm";
import TimeZoneManager from "./components/TimeZoneManager";

import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  const [darkMode, setDarkMode] = useState(true);
  const [use24Hour, setUse24Hour] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);

  const [alarmTime, setAlarmTime] = useState("");
  const [alarmEnabled, setAlarmEnabled] = useState(false);

  const [timeZones, setTimeZones] = useState([
    {
      id: "india",
      city: "New Delhi",
      country: "India",
      timeZone: "Asia/Kolkata",
    },
    {
      id: "london",
      city: "London",
      country: "United Kingdom",
      timeZone: "Europe/London",
    },
    {
      id: "new-york",
      city: "New York",
      country: "USA",
      timeZone: "America/New_York",
    },
    {
      id: "tokyo",
      city: "Tokyo",
      country: "Japan",
      timeZone: "Asia/Tokyo",
    },
    {
      id: "dubai",
      city: "Dubai",
      country: "UAE",
      timeZone: "Asia/Dubai",
    },
    {
      id: "paris",
      city: "Paris",
      country: "France",
      timeZone: "Europe/Paris",
    },
  ]);

  /* REAL-TIME CLOCK */

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ALARM */

  useEffect(() => {
    if (!alarmEnabled || !alarmTime) {
      return;
    }

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;

    if (currentTime === alarmTime) {
      alert("⏰ Alarm! The selected time has been reached.");
      setAlarmEnabled(false);
    }
  }, [time, alarmEnabled, alarmTime]);

  /* REMOVE TIME ZONE */

  function removeTimeZone(id) {
    setTimeZones((currentZones) =>
      currentZones.filter((zone) => zone.id !== id)
    );
  }

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>

      {/* HEADER */}

      <header className="top-header">

        <div className="brand">

          <div className="brand-icon">
            ◷
          </div>

          <div className="brand-text">
            <h1>ChronoSphere</h1>

            <p>
              Advanced Real-Time Clock Dashboard
            </p>
          </div>

        </div>


        {/* HEADER CONTROLS */}

        <div className="header-controls">

          {/* THEME */}

          <div className="header-control-group">

            <button
              className={
                !darkMode
                  ? "header-button active"
                  : "header-button"
              }
              onClick={() => setDarkMode(false)}
            >
              ☼ Light
            </button>

            <button
              className={
                darkMode
                  ? "header-button active"
                  : "header-button"
              }
              onClick={() => setDarkMode(true)}
            >
              ☾ Dark
            </button>

          </div>


          {/* CLOCK FORMAT */}

          <div className="header-control-group">

            <button
              className={
                !use24Hour
                  ? "header-button active"
                  : "header-button"
              }
              onClick={() => setUse24Hour(false)}
            >
              12H
            </button>

            <button
              className={
                use24Hour
                  ? "header-button active"
                  : "header-button"
              }
              onClick={() => setUse24Hour(true)}
            >
              24H
            </button>

          </div>


          {/* SECONDS */}

          <div className="header-control-group seconds-control">

            <span>
              Seconds
            </span>

            <button
              className={`header-toggle ${
                showSeconds ? "toggle-active" : ""
              }`}
              onClick={() =>
                setShowSeconds((value) => !value)
              }
            >
              <span></span>
            </button>

          </div>

        </div>

      </header>


      {/* MAIN DASHBOARD */}

      <main className="dashboard">

        {/* TITLE */}

        <section className="dashboard-title">

          <div className="title-line"></div>

          <div>
            <h2>REAL-TIME DASHBOARD</h2>

            <p>
              Your time, everywhere.
            </p>
          </div>

          <div className="title-line"></div>

        </section>


        {/* TOP DASHBOARD */}

        <section className="top-dashboard">

          <DigitalClock
            time={time}
            use24Hour={use24Hour}
            showSeconds={showSeconds}
          />

          <AnalogClock
            time={time}
          />

          <Alarm
            alarmTime={alarmTime}
            setAlarmTime={setAlarmTime}
            alarmEnabled={alarmEnabled}
            setAlarmEnabled={setAlarmEnabled}
          />

        </section>


        {/* LOWER DASHBOARD */}

        <section className="lower-dashboard">

          <WorldClock
            time={time}
            timeZones={timeZones}
            onRemove={removeTimeZone}
            use24Hour={use24Hour}
            showSeconds={showSeconds}
          />

          <TimeZoneManager
            timeZones={timeZones}
            setTimeZones={setTimeZones}
          />

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-line"></div>

        <p>
          ◷ ChronoSphere Dashboard
          {" • "}
          Real-Time
          {" • "}
          Accurate
          {" • "}
          Beautiful
        </p>

        <div className="footer-line"></div>

      </footer>

    </div>
  );
}

export default App;