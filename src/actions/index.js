export const SEARCH_OMDB = 'SEARCH_OMDB';
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const SAVE_WATCHLIST = 'SAVE_WATCHLIST';
export const LOAD_WATCHLIST = 'LOAD_WATCHLIST';

export function searchOMDB(keyword) {
  return {
    type: SEARCH_OMDB,
    keyword
  };
}

export function updateSearchResult(result) {
  return {
    type: UPDATE_SEARCH_RESULT,
    result
  };
}

export function addToWatchlist(item) {
  return {
    type: ADD_TO_WATCHLIST,
    item
  };
}

export function removeFromWatchlist(index) {
  return {
    type: REMOVE_FROM_WATCHLIST,
    index
  };
}

export function saveWatchlist() {
  return {
    type: SAVE_WATCHLIST
  };
}

export function loadWatchlist() {
  return {
    type: LOAD_WATCHLIST
  };
}
