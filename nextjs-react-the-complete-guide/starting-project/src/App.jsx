import PostList from "./components/PostsLists";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>
  );
}

export default App;
