import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

import { useState } from 'react'

function ExpenseItem(props) {

    const clickHandler = () => {
        console.log(`title:${title}`);
        console.log(`props.title:${props.title}`);
        setTitle("Updated Title")
    };

    const [title, setTitle] = useState(props.title)

    return (<li>
        <Card className="expense-item">
            <ExpenseDate amount={props.amount} date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card >
    </li >)
}

export default ExpenseItem;