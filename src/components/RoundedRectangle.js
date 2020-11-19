import React from "react";

function RoundedRectangle(props) {
  return (
    <div className="RoundedRectangle" style={props.style}>
      {props.children}
    </div>
  );
}

export default RoundedRectangle;
