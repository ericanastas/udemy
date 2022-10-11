import './ExpenseItem.css'

function ExpenseItem() {

    return (<div className="expense-item">
        <div>March 28, 2022</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">Amount</div>
        </div>
    </div>)
}

export default ExpenseItem;