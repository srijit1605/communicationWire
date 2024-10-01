import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure 
} from './tasksSlice'; // Ensure the path is correct
import axios from 'axios';

// API URL
const API_URL = 'http://localhost:8000';

function* fetchTasks() {
  try {
    yield put(fetchTasksStart());
    const response = yield call(axios.get, `${API_URL}/tasks`);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

export default function* tasksSaga() {
  yield takeLatest(fetchTasksStart.type, fetchTasks); // Use the correct action type
}
