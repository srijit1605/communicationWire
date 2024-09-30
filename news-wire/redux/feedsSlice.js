import { createSlice } from '@reduxjs/toolkit';

const feedsSlice = createSlice({
  name: 'feeds',
  initialState: {
    feeds: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchFeedsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFeedsSuccess: (state, action) => {
      state.loading = false;
      state.feeds = action.payload;
    },
    fetchFeedsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createFeedStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createFeedSuccess: (state, action) => {
      state.loading = false;
      state.feeds.push(action.payload);
    },
    createFeedFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchFeedsStart,
  fetchFeedsSuccess,
  fetchFeedsFailure,
  createFeedStart,
  createFeedSuccess,
  createFeedFailure,
} = feedsSlice.actions;

export default feedsSlice.reducer;
