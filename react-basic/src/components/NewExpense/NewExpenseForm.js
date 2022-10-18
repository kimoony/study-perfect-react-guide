import React, { useState } from "react";
import "../../style/NewExpense/NewExpenseForm.css";

const NewExpenseForm = ({ closeInput }) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const clickClose = (e) => {
    e.preventDefalut();
    closeInput(false);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputValue.title}
            onChange={changeValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={inputValue.amount}
            onChange={changeValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            name="date"
            value={inputValue.date}
            onChange={changeValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={clickClose}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
