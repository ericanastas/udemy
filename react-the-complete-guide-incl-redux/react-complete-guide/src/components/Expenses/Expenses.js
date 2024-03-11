
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )

}

export default Expenses;