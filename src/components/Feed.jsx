import * as React from "react";
import { PlasmicFeed } from "./plasmic/copy_of_minitwitter/PlasmicFeed";
import Post from './Post'
import moment from "moment"

function Feed_({posts, ...rest}, ref) {
 
  return <PlasmicFeed
    root={{ ref }} {...rest}
    postList={{
      children: posts.map(post => <Post timestamp={moment(post.createdAt).fromNow()}>{post.title}</Post>),
    }}
    />;
}

const Feed = React.forwardRef(Feed_);

export default Feed;
