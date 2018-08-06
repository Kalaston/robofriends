import { combineReducers } from "redux";
import searchRobots from "./searchRobots";

export default combineReducers({
  searchField: searchRobots
});
