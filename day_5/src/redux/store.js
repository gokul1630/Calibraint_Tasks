import { configureStore } from '@reduxjs/toolkit'
import reducers from './TodoSlice'

export const store = configureStore({
  reducer: reducers,
})
