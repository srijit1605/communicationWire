import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchFeedsSuccess,
  fetchFeedsFailure,
  createFeedSuccess,
  createFeedFailure,
  fetchFeedsStart,
  createFeedStart
} from './feedsSlice';
import axios from 'axios';

// API URL
const API_URL = 'http://localhost:8000';

function* fetchFeeds() {
  try {
    const response = yield call(axios.get, `${API_URL}/fetch_all_entry/`);
    yield put(fetchFeedsSuccess(response.data));
  } catch (error) {
    yield put(fetchFeedsFailure(error.message));
  }
}

function* createFeed(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/news_entry/`, action.payload);
    yield put(createFeedSuccess(response.data));
  } catch (error) {
    yield put(createFeedFailure(error.message));
  }
}

export default function* feedsSaga() {
  yield takeLatest(fetchFeedsStart.type, fetchFeeds);
  yield takeLatest(createFeedStart.type, createFeed);
}
