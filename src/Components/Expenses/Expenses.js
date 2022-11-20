import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
