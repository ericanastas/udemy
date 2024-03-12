import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((postsData) => {
        setPosts(postsData.posts);
        setIsFetching(false);
      });
  }, []);

  function addPostHandler(post) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "content-type": "application/json" },
    });
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {!isFetching &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
      </ul>
      {!isFetching && posts.length == 0 && <p>No posts yet!</p>}

      {isFetching && <p>Loading posts...</p>}
    </>
  );
}
export default PostList;
