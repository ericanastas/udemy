import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState("2020");


    function onFilterChangeHanlder(year) {
        console.log(year);

        setfilteredYear(year);
    }

    const filteredExpenses = props.expenses
        .filter(item => item.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <div><ExpensesFilter filtedYear={filteredYear} onChangeFilter={onFilterChangeHanlder} /></div>



            {filteredExpenses.length === 0 && <p>No expenses found!</p>}

            {filteredExpenses.length !== 0 &&
                filteredExpenses.map(item => { return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />) })}

        </Card>
    )

}

export default Expenses;