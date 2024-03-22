import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList(props) {
  const posts = useLoaderData();

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
      </ul>
      {posts.length == 0 && <p>No posts yet!</p>}
    </>
  );
}
export default PostList;
