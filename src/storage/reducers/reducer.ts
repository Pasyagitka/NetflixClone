import { combineReducers } from "redux";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
