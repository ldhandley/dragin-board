import { ChromePicker } from "react-color";
import { useState } from "react";


function Color(props: any) {
  // const [displayed, setDisplayed] = useState(false);

  const popover = {
    position: "absolute",
    // zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  function handleClose() {
    props.setDisplayed(false);
  }

  return (
    <div className="color">
      {/* <FontAwesomeIcon
        onClick={handleClick}
        title="choose color"
        className="fa-icon"
        icon={faPalette}
      /> */}
      {props.displayed ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker />
        </div>
      ) : null}
    </div>
  );
}

export default Color;
