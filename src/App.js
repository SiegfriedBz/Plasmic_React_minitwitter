import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Feed from './components/Feed';
import NewPost from "./components/NewPost"
import { v4 } from 'uuid';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Hello world", createdAt: new Date()},
    {id: 2, title: "Hello", createdAt: new Date()},
    {id: 3, title: "World", createdAt: new Date()},
  ]);

  const onAddPost = (postContent) => {
    setPosts([...posts, { id: v4(), title: postContent, createdAt: new Date() }])
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
