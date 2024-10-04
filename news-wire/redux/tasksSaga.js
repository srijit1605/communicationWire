import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchRSSTasksStart,
  fetchRSSTasksSuccess,
  fetchRSSTasksFailure 
} from './tasksSlice'; // Ensure the path is correct
import axios from 'axios';

// API URL
const API_URL = 'http://localhost:8000';

function* fetchTasks() {
  try {
    const response = yield call(axios.get, `${API_URL}/tasks`);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* fetchRSSTasks(action) {
  try {
    const response = yield call(axios.get, `${API_URL}/fetch_feed/${action.payload}`);
    yield put(fetchRSSTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchRSSTasksFailure(error.message));
  }
}

export default function* tasksSaga() {
  yield takeLatest(fetchTasksStart.type, fetchTasks);
  yield takeLatest(fetchRSSTasksStart.type, fetchRSSTasks);
}
