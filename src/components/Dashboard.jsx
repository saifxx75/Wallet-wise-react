import React, { useState } from "react";

const Dashboard = () => {
  // State for expenses
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filterCategory, setFilterCategory] = useState("All");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target["expense-name"].value;
    const amount = parseFloat(e.target["expense-amount"].value);
    const category = e.target["expense-category"].value;
    const date = e.target["expense-date"].value;

    if (!name || isNaN(amount) || amount <= 0 || !category || !date) {
      alert("Please fill all fields with valid data!");
      return;
    }

    const newExpense = { name, amount, category, date };
    setExpenses([...expenses, newExpense]);
    setTotalAmount((prev) => prev + amount);

    e.target.reset(); // Reset form
  };

  // Handle category filter
  const filteredExpenses = filterCategory === "All"
    ? expenses
    : expenses.filter((expense) => expense.category === filterCategory);
    

  return (
    <div>
      <h1 className="heading">WALLET WISE</h1>

      {/* Expense Form */}
      <form id="expense-form" className="input-group" onSubmit={handleSubmit}>
        <input type="text" id="expense-name" placeholder="Expense Name" required />
        <input type="number" id="expense-amount" placeholder="Amount" required />
        <select id="expense-category" defaultValue="" required>
          <option value="" disabled>Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
          <option value="Bills">Bills</option>
          <option value="Personal">Personal</option>
          <option value="Lent">Lent</option>
          <option value="Borrowed">Borrowed</option>
        </select>
        <input type="date" id="expense-date" required />
        <button className="add" type="submit">Add Expense</button>
      </form>

      {/* Expenses Table */}
      <div className="input-group">
        <table border="2">
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>₹ {expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    onClick={() => {
                      setExpenses(expenses.filter((_, i) => i !== index));
                      setTotalAmount((prev) => prev - expense.amount);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="total-amount">
        <strong>Total:</strong> ₹<span>{totalAmount}</span>
      </div>

      {/* Filter Expenses */}
      <div className="filter">
        <label htmlFor="filter-category">Filter by Category:</label>
        <select
          id="filter-category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
          <option value="Bills">Bills</option>
          <option value="Personal">Personal</option>
          <option value="Lent">Lent</option>
          <option value="Borrowed">Borrowed</option>
        </select>
      </div>
    </div>
  );
};

export default Dashboard;
