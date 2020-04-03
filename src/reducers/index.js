import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  favoriteReducer: favoriteReducer
});

export default rootReducer;
