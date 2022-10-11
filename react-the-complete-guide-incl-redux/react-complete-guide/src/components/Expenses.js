import ExpenseItem from "./ExpenseItem"

function Expenses(props) {

    return (
        <div className="expenses">
            {props.expenses.map(item => { return (<ExpenseItem title={item.title} date={item.date} amount={item.amount} />) })}
        </div>
    )

}

export default Expenses;