import { createReducer } from '@reduxjs/toolkit';
// combineReducers,
import { createTaskSuccess } from './actions';

const tasks = createReducer([], {
  [createTaskSuccess]: (state, action) => [action.payload, ...state],
});

export default tasks;
