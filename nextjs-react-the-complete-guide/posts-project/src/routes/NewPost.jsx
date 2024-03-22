import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewPost(props) {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link className={classes.actions} type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export function action(data) {
  return data.request
    .formData()
    .then((postData) => Object.fromEntries(postData))
    .then((postData) =>
      fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "content-type": "application/json" },
      }).then(() => redirect("/"))
    );
}
