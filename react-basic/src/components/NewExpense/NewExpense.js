import React, { useState } from "react";
import "../../style/NewExpense/NewExpense.css";
import "../../style/NewExpense/NewExpenseForm.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({ addExpenseHandler }) => {
  const [showInput, setShowInput] = useState(false);
  const clickShowInput = () => {
    if (showInput === false) {
      setShowInput(true);
    }
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      {showInput === false ? (
        <button className="new-expense__actions" onClick={clickShowInput}>
          Add Expense
        </button>
      ) : null}
      {showInput === false ? null : (
        <NewExpenseForm
          closeInput={setShowInput}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
