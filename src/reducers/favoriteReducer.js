import { ADD_FAV, REMOVE_FAV } from "../actions/favorite/favoriteType";

export const initialState = {
  favoriteList: [],
};

function addFavHandler(state, action) {
  state.favoriteList.push(action.payload.movieObject);
  return state;
}

function removeFavHandler(state, action) {
  for (var i = 0; i < state.favoriteList.length; i++) {
    if (state.favoriteList[i] == action.payload.movieObject) {
      state.favoriteList.splice(i, 1);
      break;
    }
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
