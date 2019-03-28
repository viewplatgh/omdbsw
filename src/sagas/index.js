import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_OMDB, UPDATE_SEARCH_RESULT } from '../actions';
import { updateSearchResult } from '../actions';

export function* fetchOMDB(action) {
  const url = `http://www.omdbapi.com/?apikey=2dd23c8d&s=${action.keyword}`;
  const response = yield call(fetch, url);
  const jsonData = yield response.json();
  yield put(updateSearchResult(jsonData.Search));
}

export function* handleSearchOMDB() {
  yield takeEvery(SEARCH_OMDB, fetchOMDB);
}

export default function* rootSaga() {
  yield all([handleSearchOMDB()]);
}
