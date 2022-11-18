import "./ExpenseItem.css";

function ExpenseItem(props) {
  <p className="box__strt">Let's get started!</p>;
  return (
    <div>
      <div className="box">
        <div className="contaner__title"></div>
        <div className="container">
          <div className="container--items">
            <div className="container-items__des">
              <p className="box__date">{props.date}</p>
              <p className="box__title">{props.title}</p>
            </div>
            <div className="container-items__price">
              <div className="box__price">${props.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
