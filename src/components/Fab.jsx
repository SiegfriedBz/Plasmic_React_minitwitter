import * as React from "react";
import { PlasmicFab } from "./plasmic/copy_of_minitwitter/PlasmicFab";
import { Link } from "react-router-dom"

function Fab_(props, ref) {

  return <PlasmicFab 
    root={{ ref, as: Link, props: {to: "/post"} }} {...props} 
    />;
}

const Fab = React.forwardRef(Fab_);

export default Fab;
