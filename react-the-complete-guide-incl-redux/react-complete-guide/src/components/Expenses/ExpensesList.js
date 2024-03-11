import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";



function ExpensesList(props) {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(item => { return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />) })}
        </ul>
    )
}

export default ExpensesList