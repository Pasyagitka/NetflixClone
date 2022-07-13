/* eslint-disable default-param-last */
import { PayloadAction } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT } from "../actionTypes/counter";

const initialState = 0;

function counterReducer(state = initialState, action: PayloadAction<number>) {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }
    case DECREMENT: {
      return state - 1;
    }
    default:
      return state;
  }
}

export default counterReducer;
