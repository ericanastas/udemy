import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Alice" body="ReactJS is awesome" />
      <Post author="Bob" body="I like to code" />
    </ul>
  );
}
export default PostList;
