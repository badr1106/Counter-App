import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
  render() {
    const { count, counterType, isDisabled } = this.props;

    let styles = {};
    let reverseStyles = {};

    if (count.counter == 0) {
      styles = {
        color: `rgba(0,0,0,1)`,
      };
      reverseStyles = styles;
    } else if (count.counter < 0) {
      styles = {
        color: `rgba(${155 + count.counter},0,0,1)`,
      };
      reverseStyles = {
        color: `rgba(0,${155 + count.counter},0,1)`,
      };
    } else {
      styles = {
        color: `rgba(0,${155 + count.counter},0,1)`,
      };
      reverseStyles = {
        color: `rgba(${155 + count.counter},0,0,1)`,
      };
    }

    return (
      <div className="counter">
        <div
          style={
            counterType == "counter" ? { ...styles } : { ...reverseStyles }
          }
        >
          {counterType == "counter" ? count.counter : count.reverseCounter}
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
