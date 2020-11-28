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
