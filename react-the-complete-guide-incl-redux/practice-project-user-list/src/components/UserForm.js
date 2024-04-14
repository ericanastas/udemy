
import { useState } from "react";
import Card from "./Card";
import Error from "./Error"

const UserForm = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [showError, setShowError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        const user = { username: enteredUserName, age: Number(enteredAge) };

        if (enteredUserName && enteredAge) {

            if (enteredAge < 1) {
                setErrorMessage("Please enter an age greater than zero.");
                setShowError(true);
            }
            else {

                setEnteredUserName('');
                setEnteredAge('');
                setShowError(false);
                props.onAddUser(user);

            }
        }
        else {
            setErrorMessage("Please enter a username and age");
            setShowError(true);
        }


    }

    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value);
    }

    const agechangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const onErrorCloseHandler = event => {
        setShowError(false);
        setErrorMessage('');
    };

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <div >
                    <label>Username</label>
                    <input value={enteredUserName} onChange={userNameChangeHandler} type="text" />
                </div>
                <div >
                    <label>Age (Years)</label>
                    <input value={enteredAge} onChange={agechangeHandler} type="number" />
                </div>
                <button type="submit" >Add User</button>
                {showError && <Error onClose={onErrorCloseHandler} message={errorMessage} />}
            </form>
        </Card>
    );

}

export default UserForm;