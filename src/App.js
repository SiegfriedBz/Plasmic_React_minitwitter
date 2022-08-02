import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Feed from './components/Feed';
import NewPost from "./components/NewPost"
import { createPost } from "./model.ts"

const RAILS_API = "http://localhost:3000/api/v1"

function App() {

  const [posts, setPosts] = useState([
    createPost({ content: "Hello world", createdAt: new Date() }),
    createPost({ content: "Hello", createdAt: new Date() }),
    createPost({ content: "World", createdAt: new Date() }),
  ]);

  useEffect(() => {
    const init = async() => {
      const response = await fetch(`${RAILS_API}/posts`)
      const data = await response.json()
      console.log(data)
      setPosts(data)
    }; init()
  }, [])

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
