import { createReducer } from '@reduxjs/toolkit';
// combineReducers,
import { createTaskSuccess } from './tasksAction';

const tasksReducer = createReducer([], {
  [createTaskSuccess]: (state, action) => [action.payload, ...state],
});

export default tasksReducer;
