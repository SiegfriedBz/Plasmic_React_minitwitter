import * as React from "react";
import { PlasmicFab } from "./plasmic/copy_of_minitwitter/PlasmicFab";
import { useNavigate } from "react-router-dom"

function Fab_(props, ref) {

  let navigate = useNavigate()

  const handleClick = () => {
    navigate("/post")
  }

  return <PlasmicFab 
    root={{ ref }} {...props} 
    onClick={handleClick}
    />;
}

const Fab = React.forwardRef(Fab_);

export default Fab;
