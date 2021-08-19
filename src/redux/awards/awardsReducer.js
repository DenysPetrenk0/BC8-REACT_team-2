import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
  resetError,
} from './awardsActions';

const itemsReducer = createReducer([], {
  [fetchAwardsSuccess]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchAwardsRequest]: () => true,
  [fetchAwardsSuccess]: () => false,
  [fetchAwardsError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchAwardsError]: (_, action) => action.payload,
  [resetError]: () => null,
});

const awardsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default awardsReducer;

