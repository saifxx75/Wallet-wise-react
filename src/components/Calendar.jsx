import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const FinanceCalendar = () => {
  const events = [
    { title: "Salary Credited", date: "2025-03-01" },
    { title: "Credit Card Bill", date: "2025-03-10" },
    { title: "Investment Due", date: "2025-03-15" },
  ];

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">📅 Upcoming Financial Events</h3>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default FinanceCalendar;
