import React from "react";
import moment from "moment";
import "moment/locale/ko";
import "../../style/Expenses/ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = moment(date).format("MM");
  const day = moment(date).format("DD");
  const year = moment(date).format("YYYY");

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
