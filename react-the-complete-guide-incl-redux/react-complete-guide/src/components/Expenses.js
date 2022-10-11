import ExpenseItem from "./ExpenseItem"
import Card from "./Card";

function Expenses(props) {

    return (
        <Card className="expenses">
            {props.expenses.map(item => { return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />) })}
        </Card>
    )

}

export default Expenses;