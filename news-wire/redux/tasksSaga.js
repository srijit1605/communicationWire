import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchTasksStart, 
  fetchTasksSuccess, 
  fetchTasksFailure 
} from './tasksSlice'; // Ensure you have a tasksSlice with these actions
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

// Uncomment and implement if you want to create feeds in this saga
// function* createFeed(action) {
//   try {
//     yield put(createFeedStart());
//     const response = yield call(axios.post, `${API_URL}/news_entry/`, action.payload);
//     yield put(createFeedSuccess(response.data));
//   } catch (error) {
//     yield put(createFeedFailure(error.message));
//   }
// }

export default function* tasksSaga() {
  yield takeLatest('tasks/fetchTasksStart', fetchTasks); // Ensure to replace 'feeds' with 'tasks'
}
