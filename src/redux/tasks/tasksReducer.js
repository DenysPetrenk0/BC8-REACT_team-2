import { createReducer } from '@reduxjs/toolkit';
// combineReducers,
import { createTaskSuccess, patchActiveTaskSuccess } from './tasksAction';

const tasksReducer = createReducer([], {
  [createTaskSuccess]: (state, action) => [action.payload, ...state],
  // [patchActiveTaskSuccess]: (state, action) => [action.payload, ...state],
});

export default tasksReducer;
