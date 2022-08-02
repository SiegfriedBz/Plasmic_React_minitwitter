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
      let posts = await getPosts()
      setPosts(posts)
    }; init()
  }, [])

  const getPosts = async() => {
    const response = await fetch(`${RAILS_API}/posts`)
    return await response.json()
  }

  const getPost = async(post_url) => {
    const response = await fetch(post_url)
    return await response.json()
  }

  const savePost = async(post) => {
    try {
      let resp = await fetch(`${RAILS_API}/posts`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(post)
      })
      let newPostLocation = resp.headers.get("Location")
      console.log(newPostLocation)
      return newPostLocation
    } catch (error) {
      console.log(error)
    }
  }

  const onAddPost = async(postContent) => {
    let post = createPost({ content: postContent, createdAt: new Date() })
    let newPostLocation = await savePost(post)
    let newPost = await getPost(newPostLocation)
    setPosts([...posts, newPost])
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
