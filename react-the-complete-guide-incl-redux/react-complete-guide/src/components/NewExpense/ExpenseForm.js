
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {

    const [currentTitle, setTitle] = useState('');
    const [currentAmount, setAmount] = useState('');
    const [currentDate, setDate] = useState('');

    function titleChangeHandler(event) { setTitle(event.target.value); }
    function amountChangeHandler(event) { setAmount(event.target.value); }
    function dateChangeHandler(event) { setDate(event.target.value); }

    function submitHandler(event) {

        event.preventDefault();

        const expenseData = { title: currentTitle, amount: currentAmount, date: new Date(currentDate) }


        console.log(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
        props.onSaveExpenseData(expenseData);
    }

    function cancelClickHandler() {

        props.onCancel();
    }

    return (<form onSubmit={submitHandler}>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value={currentTitle} onChange={titleChangeHandler} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input value={currentAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input value={currentDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelClickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>);
}

export default ExpenseForm;