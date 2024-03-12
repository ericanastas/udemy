import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("inital body");
  const [enteredAuthor, setEnteredAuthor] = useState("inital author");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = { author: enteredAuthor, body: enteredBody };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link className={classes.actions} type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
