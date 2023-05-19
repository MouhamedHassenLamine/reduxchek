import { configureStore } from '@reduxjs/toolkit'
import TasklistReducer from './TasklistSlice'
export const store = configureStore({
  reducer: {
    list:TasklistReducer
  },
})