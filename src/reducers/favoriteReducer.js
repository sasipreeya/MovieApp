import { ADD_FAV, REMOVE_FAV } from "../actions/favorite/favoriteType";

export const initialState = {
  favoriteList: [],
};

function addFavHandler(state, action) {
  state.favoriteList.push(action.payload.movieObject);
  return state;
}

function removeFavHandler(state, action) {
  if (state.favoriteList !== []) {
    state.favoriteList.map((item) => {
      if ((item.id = action.payload.movieId)) {
        state.favoriteList = state.favoriteList.filter(
          (item) => item.id !== action.payload.movieId
        );
      }
    });
  }
  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return addFavHandler(state, action);
    case REMOVE_FAV:
      return removeFavHandler(state, action);
    default:
      return state;
  }
};
