import { SEARCH, GET_SEARCH_RESULT } from "../actions/search/searchType";

export const initialState = {
  searchWords: null,
  searchHistory: [],
  searchResult: []
};

function searchHandler(state, action) {
  var newState = state;
  newState.searchWords = action.payload.searchWords;
  if (newState.searchHistory != []) {
    newState.searchHistory.map(item => {
      if ((item = action.payload.searchWords)) {
        newState.searchHistory = newState.searchHistory.filter(
          item => item !== action.payload.searchWords
        );
      }
    });
  }
  newState.searchHistory.push(action.payload.searchWords);
  return newState;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return searchHandler(state, action);
    case GET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult
      };
    default:
      return state;
  }
};
