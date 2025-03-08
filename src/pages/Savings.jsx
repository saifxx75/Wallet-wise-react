import React, { useState } from "react";
import "../css/savings.css";

const Savings = () => {
  const [goal, setGoal] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);

  // Calculate progress percentage
  const progress =
    goal > 0 ? Math.min((savedAmount / goal) * 100, 100).toFixed(2) : 0;

  // Update Savings
  const updateSavings = () => {
    if (goal <= 0) {
      alert("Please enter a valid goal amount!");
      return;
    }
    const newAmount = prompt("Enter saved amount:");
    if (newAmount && !isNaN(newAmount) && newAmount > 0) {
      setSavedAmount((prev) => prev + parseFloat(newAmount));
    } else {
      alert("Please enter a valid number!");
    }
  };

  return (
    <div className="savings-container">
      <h1 className="heading">Savings Tracker</h1>

      <div className="input-group">
        <label>Set Your Goal:</label>
        <input
          type="number"
          placeholder="Enter goal amount"
          value={goal}
          onChange={(e) => setGoal(parseFloat(e.target.value) || 0)}
        />

        <br />
        <br />

        <label>Amount Saved:</label>
        <input
          type="number"
          placeholder="Enter saved amount"
          value={savedAmount}
          readOnly
        />
      </div>

      <br />
      <button onClick={updateSavings}>Add Savings</button>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            height: "25px",
            color: "white",
            textAlign: "center",
          }}
        >
          {progress}%
        </div>
      </div>

      <p>
        {progress >= 100
          ? "🎉 Congratulations! You reached your savings goal!"
          : `You have saved ${progress}% of your goal.`}
      </p>
    </div>
  );
};

export default Savings;
