import { ADD_FAV, REMOVE_FAV } from "../actions/favorite/favoriteType";

export const initialState = {
  favoriteList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favoriteList: favoriteList.push(action.payload.movieObject)
      };
    case REMOVE_FAV:
      return {
        ...state,
        favoriteList: favoriteList.filter(
          item => !(item.id = action.payload.movieId)
        )
      };
    default:
      return state;
  }
};
