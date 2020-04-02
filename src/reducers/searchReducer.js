import { SEARCH } from "../actions/search/searchType";

export const initialState = {
  searchWords: "",
  searchHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchWords: action.payload.searchWords,
        searchHistory: searchHistory.push(action.payload.searchWords)
      };
    default:
      return state;
  }
};
