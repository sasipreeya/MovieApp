import { SEARCH, GET_SEARCH_RESULT } from "../actions/search/searchType";

export const initialState = {
  searchWords: null,
  searchHistory: [],
  searchResult: null,
};

function searchHandler(state, action) {
  state.searchWords = action.payload.searchWords;
  if (state.searchHistory != []) {
    state.searchHistory.map((item) => {
      if ((item = action.payload.searchWords)) {
        state.searchHistory = state.searchHistory.filter(
          (item) => item !== action.payload.searchWords
        );
      }
    });
  }
  state.searchHistory.push(action.payload.searchWords);
  return state;
}

function getSearchResultHandler(state, action) {
  state.searchResult = action.payload.searchResult;
  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return searchHandler(state, action);
    case GET_SEARCH_RESULT:
      return getSearchResultHandler(state, action);
    default:
      return state;
  }
};
