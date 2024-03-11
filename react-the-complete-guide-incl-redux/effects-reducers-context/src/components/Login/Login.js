import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//Created outside of the component because all values it depends on should be passed in through arguments
const emailReducer = (state, action) => {

    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    else if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes('@') };
    }
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.length > 6 };
    }
    else if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.length > 6 };
    }
}




const Login = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });


    useEffect(() => {
        const timerHandle = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(emailState.isValid && passwordState.isValid
            );
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(timerHandle);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
