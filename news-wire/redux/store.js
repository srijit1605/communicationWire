import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Combine feeds and tasks reducers
import rootSaga from './rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),

});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
