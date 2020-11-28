import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export default function reducer(
  state = { counter: 0, reverseCounter: 0, slider_value: 1 },
  action
) {
  switch (action.type) {
    case INCREMENT_NUM:
      return (state = {
        ...state,
        counter: state.counter + state.slider_value,
        reverseCounter: state.reverseCounter - state.slider_value,
      });
    case DECREMENT_NUM:
      return (state = {
        ...state,
        counter: state.counter - state.slider_value,
        reverseCounter: state.reverseCounter + state.slider_value,
      });
    case SET_SLIDER_COUNT:
      return (state = {
        ...state,
        slider_value: action.payload,
      });
    case RESET:
      return (state = {
        ...state,
        counter: 0,
        reverseCounter: 0,
      });
  }

  return state;
}
