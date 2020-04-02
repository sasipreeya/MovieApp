import { SEARCH } from "./searchType";

export const search = searchWords => ({
  type: SEARCH,
  payload: {
    searchWords
  }
});
