import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Feed from './components/Feed';
import NewPost from "./components/NewPost"
import { v4 } from 'uuid';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Hello world 01", time: Math.floor(Math.random() * 24)},
    {id: 2, title: "Hello world 02", time: Math.floor(Math.random() * 24)},
    {id: 3, title: "Hello world 03", time: Math.floor(Math.random() * 24)},
  ]);

  const onAddPost = (postContent) => {
    setPosts([...posts, {title: postContent, time: Math.floor(Math.random() * 24), id: v4()}])
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
