import { ADD_FAV, REMOVE_FAV } from "./favoriteType";

export const addFav = movieObject => ({
  type: ADD_FAV,
  payload: {
    movieObject
  }
});

export const removeFav = movieId => ({
  type: REMOVE_FAV,
  payload: {
    movieId
  }
});