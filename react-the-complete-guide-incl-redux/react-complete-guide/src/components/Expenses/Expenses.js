
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState("2020");


    function onFilterChangeHandler(year) {
        console.log(year);

        setfilteredYear(year);
    }

    const filteredExpenses = props.expenses
        .filter(item => item.date.getFullYear().toString() === filteredYear);


    return (
        <Card className="expenses">
            <div><ExpensesFilter filtedYear={filteredYear} onChangeFilter={onFilterChangeHandler} /></div>
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )

}

export default Expenses;