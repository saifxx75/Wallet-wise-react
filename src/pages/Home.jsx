import React, { useEffect, useState } from 'react'
import '../css/home.css'
import CalendarComponent from '../components/Calendar';

const Home = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);
  const [tip, setTip] = useState("");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    renderCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    showRandomTip();
  }, []);

  const renderCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    let daysArray = [];
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (date > daysInMonth) {
          break;
        } else {
          week.push(date);
          date++;
        }
      }
      daysArray.push(week);
      if (date > daysInMonth) break;
    }
    setCalendarDays(daysArray);
  };

  const tips = [
    "Track your spending daily to stay on budget.",
    "Save at least 10% of your income each month.",
    "Review your subscriptions and cancel unused ones.",
    "Plan your meals to reduce dining expenses.",
    "Set clear financial goals and monitor your progress.",
    "Build an emergency fund for unexpected expenses.",
    "Compare prices before making big purchases.",
    "Track your daily expenses to stay aware of your spending habits.",
    "Create and stick to a realistic budget.",
  ];

  const showRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  };

  return (
    <>
  <main>
    <h2 className="heading"> WELCOME TO WALLET WISE </h2>
    <br />
    <div className="container">
      <div id="insights" className="widget">
        <h2>Financial Insights &amp; Tips</h2>
        <p id="tipText">{tip}</p>
        <button id="new-tip" onClick={showRandomTip}>New Tip</button>
      </div>
    </div>
    <div className="calendar flex justify-center items-center min-h-screen bg-gray-100">
      <CalendarComponent />
    </div>
  </main>
</>
  )
}

export default Home


