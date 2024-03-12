import classes from "./Modal.module.css";

import { useNavigate } from "react-router-dom";

function Modal(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
