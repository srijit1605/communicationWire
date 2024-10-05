import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTasksSuccess: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchRSSTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRSSTasksSuccess: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    },
    fetchRSSTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    scheduleTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    scheduleTasksSuccess: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    scheduleTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchRSSTasksStart,
  fetchRSSTasksSuccess,
  fetchRSSTasksFailure,
  scheduleTasksStart,
  scheduleTasksSuccess,
  scheduleTasksFailure
} = tasksSlice.actions;

export default tasksSlice.reducer;
