export const SEARCH_OMDB = 'SEARCH_OMDB';
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';

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
