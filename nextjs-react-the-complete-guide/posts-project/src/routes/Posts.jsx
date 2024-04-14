import PostList from "../components/PostsLists";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export function loader() {
  return fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((res) => res.posts);
}
