import * as React from "react";
import { PlasmicFeed } from "./plasmic/copy_of_minitwitter/PlasmicFeed";
import Post from './Post'

function Feed_(props, ref) {

  const [posts, setPosts] = React.useState([
    {title: "Hello world 01", time: Math.floor(Math.random() * 24)},
    {title: "Hello world 02", time: Math.floor(Math.random() * 24)},
    {title: "Hello world 03", time: Math.floor(Math.random() * 24)},
  ]);

  return <PlasmicFeed
    root={{ ref }} {...props}
    postList={{
      children: posts.map(post => <Post timestamp={post.time}>{post.title}</Post>),
    }}
    />;
}

const Feed = React.forwardRef(Feed_);

export default Feed;
