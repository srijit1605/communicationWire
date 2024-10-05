import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchRSSTasksStart,
  fetchRSSTasksSuccess,
  fetchRSSTasksFailure,
  scheduleTasksStart,
  scheduleTasksSuccess, 
  scheduleTasksFailure,
} from './tasksSlice';
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

function* scheduleTasks(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/schedule_task/${action.payload}`);
    yield put(scheduleTasksSuccess(response.data));
  } catch (error) {
    yield put(scheduleTasksFailure(error.message));
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
  yield takeLatest(scheduleTasksStart.type, scheduleTasks);
}
