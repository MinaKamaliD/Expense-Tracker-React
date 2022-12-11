import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 2, 6),
    title: "Car insurance",
    amount: 65,
  },
  {
    id: 2,
    date: new Date(2021, 0, 22),
    title: "Toilet paper",
    amount: 95.24,
  },
  {
    id: 3,
    date: new Date(2020, 10, 10),
    title: "Gym fees",
    amount: 24.95,
  },
  {
    id: 4,
    date: new Date(),
    title: "Food",
    amount: 103.74,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
