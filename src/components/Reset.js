import React from "react";

function Reset(props) {
  return (
    <div
      className="counter_btn_controls"
      onClick={() => {
        props.reset();
      }}
    >
      <span>{props.label}</span>
    </div>
  );
}

export default Reset;
