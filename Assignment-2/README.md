# ChronoSphere — Real-Time Clock Dashboard

ChronoSphere is a modern real-time clock dashboard built using React and Vite. It provides multiple ways to view and manage time, including a digital clock, analog clock, world clocks, alarm functionality, and time-zone management.

This project was developed as **Assignment 2** for the Web Technology course.

---

## Features

### Digital Clock
- Displays the current local time in real time.
- Updates automatically every second.
- Supports both **12-hour and 24-hour formats**.
- Optional seconds display.
- Displays the current date.

### Analog Clock
- Real-time analog clock with hour, minute, and second hands.
- Includes 60 clock ticks and hour markers.
- Clock hands continuously reflect the current time.

### World Clock
- Displays the current time in multiple cities around the world.
- Includes both digital and mini analog clocks.
- Displays the corresponding date and IANA time-zone name.
- World clocks update automatically in real time.

### Time-Zone Management
- Add additional cities to the World Clock.
- Prevents duplicate time zones from being added.
- Remove cities from the World Clock when no longer needed.
- India/New Delhi is kept as the default clock and cannot be removed.

### Alarm
- Set an alarm for a specific time.
- Enable or disable the alarm.
- Displays the currently configured alarm status.
- Shows a browser alert when the selected time is reached.
- Clear the alarm at any time.

### Display Controls
- Switch between **Light Mode** and **Dark Mode**.
- Switch between **12-hour and 24-hour time formats**.
- Toggle the display of seconds.

---

## Technologies Used

- **React 19**
- **Vite 8**
- **JavaScript (JSX)**
- **HTML5**
- **CSS3**
- **Intl.DateTimeFormat API**
- **React Hooks**
  - `useState`
  - `useEffect`

No external UI framework or time/date library is required.

---

## Project Structure

```text
Assignment_2/
│
├── public/
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Alarm.jsx
│   │   ├── AnalogClock.jsx
│   │   ├── DigitalClock.jsx
│   │   ├── TimeZoneManager.jsx
│   │   └── WorldClock.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
