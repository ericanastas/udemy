import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(post) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "content-type": "application/json" },
    });

    //setPosts((existingPosts) => [post, ...existingPosts]);
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))
        ) : (
          <p>No posts yet!</p>
        )}
      </ul>
    </>
  );
}
export default PostList;
