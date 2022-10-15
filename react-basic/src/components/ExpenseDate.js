import React from "react";
import "../style/ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("ko", { month: "long" });
  const day = date.toLocaleString("ko", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div calssName="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;