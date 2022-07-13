import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  movies: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
