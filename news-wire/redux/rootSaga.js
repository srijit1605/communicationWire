import { all, fork } from 'redux-saga/effects';
import feedsSaga from './feedsSaga';
import tasksSaga from './tasksSaga';

export default function* rootSaga() {
  yield all([
    fork(feedsSaga),
    fork(tasksSaga),
  ]);
}
