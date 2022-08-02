import * as React from "react";
import { PlasmicButton } from "./plasmic/copy_of_minitwitter/PlasmicButton";

function Button_(props, ref) {

  return <PlasmicButton root={{ ref }} {...props} />;
}

const Button = React.forwardRef(Button_);

export default Button;
