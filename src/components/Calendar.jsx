import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/calendar.css";
const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const isToday = (dateToCheck) => {
    const today = new Date();
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">📅 Select a Date</h3>
      <Calendar
        onChange={setDate}
        value={date}
        className="calendar-wrapper"
        tileClassName={({ date, view }) =>
          view === "month" && isToday(date) ? "today" : ""
        }
        tileContent={({ date, view }) =>
          view === "month" && isToday(date) ? <span>🌟</span> : null
        }
      />
      <p className="selected-date">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CustomCalendar;
