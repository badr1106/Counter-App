import React from "react";

function Decrement(props) {
  return (
    <div
      className="counter_btn_controls"
      onClick={() => {
        props.decrement();
      }}
    >
      <span>{props.label}</span>
    </div>
  );
}

export default Decrement;
