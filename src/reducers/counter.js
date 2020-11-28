import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export default function reducer(
  state = { counter: 0, reverseCounter: 0, slider_value: 1 }, // Declared reverseCounter = 0 for the first time 7ateto fel state beta3 el reducer da w same el slider value
  action
) {
  switch (
    action.type // based 3al action.type elly mawgod f countAractions.js bey5osh 3ala el cases
  ) {
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
        ...state, // ba spread el state w ba update el state bel counter w el reverse
        counter: 0,
        reverseCounter: 0,
      });
  }

  return state;
}
