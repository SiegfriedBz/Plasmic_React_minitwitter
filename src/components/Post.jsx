import * as React from "react";
import { PlasmicPost } from "./plasmic/copy_of_minitwitter/PlasmicPost";

function Post_(props, ref) {

  return <PlasmicPost root={{ ref }} {...props} />;
}

const Post = React.forwardRef(Post_);

export default Post;
