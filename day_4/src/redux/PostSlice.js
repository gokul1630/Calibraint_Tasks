import { createSlice } from '@reduxjs/toolkit';

/*
 * createSlice() is a function to initialize slice name, state and reducers
 * to perform a certain actions.
 */

const PostSlice = createSlice({
  name: 'post',
  initialState: {
    // initial state of this app
    posts: {
      loading: true,
      data: {},
      error: '',
    },
  },

  reducers: {
    // reducers object holds reducer functions to perform certain actions
    newPost: (state, action) => {
      state.posts = action.payload;
    },
    error: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { newPost, error } = PostSlice.actions; // exports actions for dispatch events in components

export default PostSlice.reducer; // exports root reducer for configureStore
