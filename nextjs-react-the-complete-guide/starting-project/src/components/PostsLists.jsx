import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostList(props) {
  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Bob" body="I like to code" />
      </ul>
    </>
  );
}
export default PostList;
