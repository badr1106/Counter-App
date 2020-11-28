import React from "react";

function Increment(props) {
  return (
    <div
      className="counter_btn_controls"
      onClick={() => {
        props.increment();
      }}
    >
      <span>{props.label}</span>
    </div>
  );
}

export default Increment;
