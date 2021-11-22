import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log("expenses.js", selectedYear);
    // console.log(props.items[0].date.getFullYear().toString());
    // console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
