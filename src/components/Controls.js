import React, { Component } from "react";
import PropTypes from "prop-types";
import Increment from "./Increment";
import Reset from "./Reset";
import Decrement from "./Decrement";

class Controls extends Component {
  render() {
    const {
      incrementLabel,
      decrementLabel,
      increment,
      decrement,
      reset,
      resetLabel,
      isDisabled,
      counterType,
    } = this.props;

    console.log(this.props);
    let map = {};
    document.addEventListener("keydown", function (e) {
      map[e.key] = true;
      if (map["Control"] && map["ArrowRight"] && counterType == "counter") {
        increment();
      }
      if (map["Control"] && map["ArrowLeft"] && counterType == "counter") {
        decrement();
      }
    });

    document.addEventListener("keyup", function (e) {
      map[e.key] = false;
    });

    return (
      <div className={isDisabled ? "controls disabled" : "controls"}>
        <Increment increment={increment} label={incrementLabel} />
        <Reset reset={reset} label={resetLabel} />
        <Decrement decrement={decrement} label={decrementLabel} />
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  incrementLabel: "+",
  resetLabel: "reset",
  decrementLabel: "-",
};

export default Controls;
