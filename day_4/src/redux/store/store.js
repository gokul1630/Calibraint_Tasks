import { configureStore } from '@reduxjs/toolkit';
import reducer from '../PostSlice';
/*
 * configureStore() is a Object which holds whole state of this application,
 */
export const PostStore = configureStore({
  reducer: reducer,
});
