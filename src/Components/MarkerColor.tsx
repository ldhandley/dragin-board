import { useState } from "react";
import { ChromePicker } from "react-color";

function Color(props) {
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  const [displayed, setDisplayed] = useState(false);

  function handleClick() {
    setDisplayed(true);
  }

  function handleClose() {
    setDisplayed(false);
  }

  return (
    <div className="color">
      <FontAwesomeIcon
        onClick={handleClick}
        title="choose color"
        className="fa-icon"
        icon={faPalette}
      />
      {displayed ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker />
        </div>
      ) : null}
    </div>
  );
}

export default Color;
