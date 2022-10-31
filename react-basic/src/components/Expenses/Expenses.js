import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../../style/Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [selectValue, setSelectValue] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setSelectValue(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectValue}
          filterChangeHandler={filterChangeHandler}
        />
        {expenses.length === 0 ? (
          <h1 className="expenses_zero">Please, Add Expenses</h1>
        ) : (
          expenses
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
