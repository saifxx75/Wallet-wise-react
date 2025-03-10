import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const isToday = (calendarDate) => {
    const today = new Date();
    return (
      calendarDate.getDate() === today.getDate() &&
      calendarDate.getMonth() === today.getMonth() &&
      calendarDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">📅 Select a Date</h3>
      <Calendar 
        onChange={setDate} 
        value={date}
        className="w-full"
        tileClassName={({ date, view }) => 
          view === "month" && isToday(date) ? "today" : ""
        }
        tileContent={({ date, view }) => 
          view === "month" && isToday(date) ? <span className="text-blue-500">🌟</span> : null
        }
      />
      <p className="mt-2 text-gray-700">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
