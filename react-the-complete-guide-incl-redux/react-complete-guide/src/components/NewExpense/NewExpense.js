import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

    const [showExpenseForm, setShowExpenseForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowExpenseForm(false);
    }

    function onCancelHandler() {

        setShowExpenseForm(false);
    }

    function onAddExpenseClickHandler() {
        setShowExpenseForm(true);
    }

    if (showExpenseForm) {
        return (
            <div className="new-expense"><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}></ExpenseForm></div>
        );
    }
    else {
        return (<div className="new-expense"><button onClick={onAddExpenseClickHandler}>Add Expense</button></div>)
    }


}

export default NewExpense;