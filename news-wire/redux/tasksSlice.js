import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
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
      state.tasks = action.payload;
    },
    fetchRSSTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAllTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAllTasksSuccess: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchAllTasksFailure: (state, action) => {
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
  fetchAllTasksStart,
  fetchAllTasksSuccess,
  fetchAllTasksFailure
} = tasksSlice.actions;

export default tasksSlice.reducer;
