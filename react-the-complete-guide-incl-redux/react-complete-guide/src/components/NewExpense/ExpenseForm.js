
import "./ExpenseForm.css";

function ExpenseForm() {


    function titleChangeHandler(event) { console.log(event.target.value); }
    function amountChangeHandler(event) { console.log(event.target.value); }
    function dateChangeHandler(event) { console.log(event.target.value); }

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