import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
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
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
