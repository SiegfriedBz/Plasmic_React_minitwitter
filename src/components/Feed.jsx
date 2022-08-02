import * as React from "react";
import { PlasmicFeed } from "./plasmic/copy_of_minitwitter/PlasmicFeed";
import Post from './Post'

function Feed_({posts, ...rest}, ref) {
 
  return <PlasmicFeed
    root={{ ref }} {...rest}
    postList={{
      children: posts.map(post => <Post timestamp={post.time}>{post.title}</Post>),
    }}
    />;
}

const Feed = React.forwardRef(Feed_);

export default Feed;
