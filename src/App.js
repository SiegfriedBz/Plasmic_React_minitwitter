import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Feed from './components/Feed';
import NewPost from "./components/NewPost"
import { createPost } from "./model.ts"

function App() {

  const [posts, setPosts] = useState([
    createPost({ content: "Hello world", createdAt: new Date() }),
    createPost({ content: "Hello", createdAt: new Date() }),
    createPost({ content: "World", createdAt: new Date() }),
  ]);

  const onAddPost = (postContent) => {
    setPosts([...posts, createPost({ content: postContent, createdAt: new Date() })])
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed posts={posts}/>} />
        <Route path="/post" element={<NewPost onAddPost={onAddPost} />} />
      </Routes>
    </div>
  );
}

export default App;
