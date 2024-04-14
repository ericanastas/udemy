import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import Wrapper from '../Helpers/Wrapper'


const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} />
    );
}
const ModelOverlay = (props) => {
    return (
        <React.Fragment>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </React.Fragment>
    );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}></ModelOverlay>,
                document.getElementById('modal-root'))}
        </React.Fragment >
    );
};

export default ErrorModal;
