import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostList(props) {
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  const [enteredBody, setEnteredBody] = useState("inital body");
  const [enteredAuthor, setEnteredAuthor] = useState("inital author");

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Bob" body="I like to code" />
      </ul>
    </>
  );
}
export default PostList;
