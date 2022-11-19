import "./ExpenseItem.css";
import DateItem from "./DateItem";
function ExpenseItem(props) {
  <p className="box__strt">Let's get started!</p>;

  return (
    <div className="expense-item">
      <DateItem date={props.date}></DateItem>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
