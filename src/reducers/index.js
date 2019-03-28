import {
  SEARCH_OMDB,
  UPDATE_SEARCH_RESULT,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  LOAD_WATCHLIST
} from '../actions';

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
    case ADD_TO_WATCHLIST:
      return { ...state, watchlist: [...state.watchlist, action.item] };
    case REMOVE_FROM_WATCHLIST:
      let newWatchlist = [...state.watchlist];
      newWatchlist.splice(action.index, 1);
      return { ...state, watchlist: newWatchlist };
    case LOAD_WATCHLIST:
      try {
        newWatchlist = JSON.parse(localStorage.getItem('omdbsw'));
        if (!newWatchlist) {
          return state;
        }
      } catch (e) {
        return state;
      }
      return { ...state, watchlist: newWatchlist };
    default:
      return state;
  }
}
