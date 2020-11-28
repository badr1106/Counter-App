import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import {
  incrementNum,
  decrementNum,
  resetNum,
} from "../actions/counterActions";

export class Controller extends Component {
  render() {
    return <Controls {...this.props} />;
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementNum()); // equivalent to useDispatch(increment) in functional component
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    reset: () => {
      dispatch(resetNum());
    },
  };
};

export default connect(null, mapDispatchToProps)(Controls);
