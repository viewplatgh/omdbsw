import { SEARCH_OMDB, UPDATE_SEARCH_RESULT } from '../actions';

const initialState = {
  keyword: '',
  result: [],
  watchlist: []
};

export default function omdbReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_OMDB:
      return { ...state, keyword: action.keyword };
    case UPDATE_SEARCH_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
}
