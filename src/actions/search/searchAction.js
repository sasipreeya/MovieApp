import { SEARCH, GET_SEARCH_RESULT } from "./searchType";

searchForResult = words => {
  return fetch(
    "http://scb-movies-api.herokuapp.com/api/movies/search?query=${words}",
    {
      method: "GET",
      headers: {
        "api-key": "b281db381841c6ec99a6183c9945d76fb6634d60"
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

export const search = searchWords => {
  return dispatch => {
    dispatch({
      type: SEARCH,
      payload: {
        searchWords: searchWords
      }
    });
  }
};

export const getSearchResult = searchWords => {
  return dispatch => {
    dispatch({
      type: GET_SEARCH_RESULT,
      payload: {
        searchResult: searchForResult(searchWords)
      }
    });
  }
};
