import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  SET_SLIDER_COUNT,
} from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload,
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload,
  };
}

export function resetNum(payload) {
  // First step added da el action beta3 el reset.
  return {
    type: RESET,
    payload: payload,
  };
}

export function sliderNum(payload) {
  return {
    type: SET_SLIDER_COUNT,
    payload: payload,
  };
}
