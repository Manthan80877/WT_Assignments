const availableTimeZones = [
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
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    timeZone: "Europe/Berlin",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    timeZone: "Asia/Singapore",
  },
  {
    id: "seoul",
    city: "Seoul",
    country: "South Korea",
    timeZone: "Asia/Seoul",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    timeZone: "Australia/Sydney",
  },
];

function TimeZoneManager({
  timeZones,
  setTimeZones,
}) {
  function addTimeZone(event) {
    const selectedId = event.target.value;

    if (!selectedId) {
      return;
    }

    const selectedZone =
      availableTimeZones.find(
        (zone) => zone.id === selectedId
      );

    if (!selectedZone) {
      return;
    }

    const alreadyExists =
      timeZones.some(
        (zone) =>
          zone.timeZone ===
          selectedZone.timeZone
      );

    if (alreadyExists) {
      alert(
        `${selectedZone.city} is already on your World Clock.`
      );

      event.target.value = "";
      return;
    }

    setTimeZones([
      ...timeZones,
      selectedZone,
    ]);

    event.target.value = "";
  }

  function removeTimeZone(id) {
    setTimeZones(
      timeZones.filter(
        (zone) => zone.id !== id
      )
    );
  }

  return (
    <div className="clock-card timezone-manager">

      <div className="card-label">
        TIME ZONE MANAGEMENT
      </div>

      <h2>
        Manage World Clocks
      </h2>

      <p className="timezone-description">
        Add or remove cities from your World Clock.
      </p>


      {/* Add Time Zone */}

      <div className="timezone-add">

        <select
          defaultValue=""
          onChange={addTimeZone}
        >

          <option value="">
            Select a time zone
          </option>

          {availableTimeZones.map(
            (zone) => (
              <option
                key={zone.id}
                value={zone.id}
              >
                {zone.city} — {zone.country}
              </option>
            )
          )}

        </select>

      </div>


      {/* Current Time Zones */}

      <div className="selected-zones">

        {timeZones.map(
          (zone) => (

            <div
              className="selected-zone"
              key={zone.id}
            >

              <div>

                <strong>
                  {zone.city}
                </strong>

                <span>
                  {zone.country}
                </span>

              </div>


              {/* Don't allow India to be removed */}

              {zone.id !== "india" && (
                <button
                  className="remove-zone"
                  onClick={() =>
                    removeTimeZone(zone.id)
                  }
                >
                  Remove
                </button>
              )}

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default TimeZoneManager;