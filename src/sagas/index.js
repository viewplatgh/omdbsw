import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import {
  SEARCH_OMDB,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST
} from '../actions';
import { updateSearchResult } from '../actions';

export function* fetchOMDB(action) {
  const url = `http://www.omdbapi.com/?apikey=2dd23c8d&s=${action.keyword}`;
  const response = yield call(fetch, url);
  const jsonData = yield response.json();
  yield put(updateSearchResult(jsonData.Search));
}

export function* saveWatchlist() {
  const watchlist = yield select(state => state.watchlist);
  localStorage.setItem('omdbsw', JSON.stringify(watchlist));
}

export default function* rootSaga() {
  yield all([
    takeEvery(SEARCH_OMDB, fetchOMDB),
    takeEvery(ADD_TO_WATCHLIST, saveWatchlist),
    takeEvery(REMOVE_FROM_WATCHLIST, saveWatchlist)
  ]);
}
