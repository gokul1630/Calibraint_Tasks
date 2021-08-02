import { configureStore } from '@reduxjs/toolkit';
import reducer from '../PostSlice';
/*
 * configureStore() is a function which holds whole state of this application,
 */
export const PostStore = configureStore({
  reducer: reducer,
});
