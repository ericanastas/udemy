const Error = props => {

    const onClickHandler = event => {
        props.onClose();
    }

    return (
        <div>
            <p>{props.message}</p>
            <button onClick={onClickHandler}>Close Error</button>
        </div>);

}

export default Error;