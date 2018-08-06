import { CHANGE_SEARCH_FIELD } from "../actions/types";

export default (state = "", action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return action.payload.target.value;
    default:
      return state;
  }
};
