/** @format */
import { configureStore } from '@reduxjs/toolkit';
import weekReducer from './reducer/weekReducer';

const store = configureStore({
  reducer: {
    weekInfo: weekReducer,
  },
});

export default store;
