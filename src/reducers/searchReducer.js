import { SEARCH, GET_SEARCH_RESULT } from "../actions/search/searchType";

export const initialState = {
  searchWords: "",
  searchHistory: [],
  searchResult: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchWords: action.payload.searchWords,
        searchHistory: searchHistory.push(action.payload.searchWords)
      };
    case GET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult
      };
    default:
      return state;
  }
};
