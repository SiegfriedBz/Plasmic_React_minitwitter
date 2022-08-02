import React, { useState } from "react";
import { PlasmicNewPost } from "./plasmic/copy_of_minitwitter/PlasmicNewPost";
import { useNavigate } from "react-router-dom"

function NewPost_({onAddPost, ...rest } , ref) {

  const [postContent, setPostContent] = useState("")

  let navigate = useNavigate()

  return <PlasmicNewPost 
    root={{ ref }} {...rest} 
    postContent={{
      value: postContent,
      onChange: (e) => {setPostContent(e.target.value)}
    }}
    postButton={{
      onClick: () => {
        onAddPost(postContent)
        setPostContent("")
        navigate("/")
      },
    }}
  />;
}

const NewPost = React.forwardRef(NewPost_);

export default NewPost;
