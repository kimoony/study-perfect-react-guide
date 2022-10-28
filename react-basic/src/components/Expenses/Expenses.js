import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../style/Expenses/Expenses.css";
import Card from "../UI/Card";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses
        // .sort((a, b) => {
        //   return new Date(b.expenses.date) - new Date(a.expenses.date);
        // })
        .map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </Card>
  );
}

export default Expenses;
