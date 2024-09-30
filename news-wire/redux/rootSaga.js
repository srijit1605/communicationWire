import { all, fork } from 'redux-saga/effects';
import feedsSaga from './feedsSaga'; // Create this saga
import tasksSaga from './tasksSaga'; // Create this saga

export default function* rootSaga() {
  yield all([
    fork(feedsSaga),
    fork(tasksSaga),
  ]);
}
