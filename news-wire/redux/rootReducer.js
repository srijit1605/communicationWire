import { combineReducers } from 'redux';
import feedsReducer from './feedsSlice'; // Ensure the path is correct
import tasksReducer from './tasksSlice'; // Ensure the path is correct

const rootReducer = combineReducers({
  feeds: feedsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
