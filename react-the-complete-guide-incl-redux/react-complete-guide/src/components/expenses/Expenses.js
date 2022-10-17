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

    return (

        <Card className="expenses">
            <div><ExpensesFilter filtedYear={filteredYear} onChangeFilter={onFilterChangeHanlder} /></div>
            {props.expenses.map(item => { return (<ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />) })}
        </Card>

    )

}

export default Expenses;