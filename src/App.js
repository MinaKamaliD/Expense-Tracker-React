import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 2, 6),
      title: "Car insurance",
      price: 65,
    },
    {
      id: 2,
      date: new Date(2021, 0, 22),
      title: "Toilet paper",
      price: 95.24,
    },
    {
      id: 3,
      date: new Date(2020, 10, 10),
      title: "Gym fees",
      price: 24.95,
    },
    {
      id: 4,
      date: new Date(),
      title: "Food",
      price: 103.74,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
