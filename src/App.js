import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const items = [
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
      <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        price={items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        price={items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        price={items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={items[3].date}
        title={items[3].title}
        price={items[3].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
