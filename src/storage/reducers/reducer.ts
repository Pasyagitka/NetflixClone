import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import moviesReducer from "./moviesSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  movies: moviesReducer,
});

export default rootReducer;
