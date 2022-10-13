
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm() {

    const [userInput, setUserInput] = useState({ currentTitle: '', currentAmount: '', currentDate: '' });

    function titleChangeHandler(event) {
        setUserInput((prevState) => {
            return { ...prevState, currentTitle: event.target.value }
        });
    }

    function amountChangeHandler(event) {
        setUserInput((prevState) => {
            return { ...prevState, currentAmount: event.target.value }
        });
    }

    function dateChangeHandler(event) {

        setUserInput((prevState) => {
            return { ...prevState, currentDate: event.target.value }
        });
    }

    return (<form>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={titleChangeHandler} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>);
}

export default ExpenseForm;