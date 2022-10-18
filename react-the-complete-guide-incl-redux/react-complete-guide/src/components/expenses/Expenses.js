import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState("2020");


    function onFilterChangeHandler(year) {
        console.log(year);

        setfilteredYear(year);
    }

    const filteredExpenses = props.expenses
        .filter(item => item.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No expenses found!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(item => { return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />) });
    }

    return (
        <Card className="expenses">
            <div><ExpensesFilter filtedYear={filteredYear} onChangeFilter={onFilterChangeHandler} /></div>
            {expensesContent}
        </Card>
    )

}

export default Expenses;