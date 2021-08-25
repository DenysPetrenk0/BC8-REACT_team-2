import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
  orderAwardRequest,
  orderAwardSuccess,
  orderAwardError,
  resetError,
} from './awardsActions';

const itemsReducer = createReducer([], {
  [fetchAwardsSuccess]: (_, action) => action.payload,
  // [orderAwardSuccess]: (_, action) => action.payload,
});

const giftIdsReducer = createReducer([], {
  [orderAwardSuccess]: (_, action) => action.payload.giftIds,
});

const loadingReducer = createReducer(false, {
  [fetchAwardsRequest]: () => true,
  [fetchAwardsSuccess]: () => false,
  [fetchAwardsError]: () => false,

  [orderAwardRequest]: () => true,
  [orderAwardSuccess]: () => false,
  [orderAwardError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchAwardsError]: (_, action) => action.payload,
  [orderAwardError]: (_, action) => action.payload,
  [resetError]: () => null,
});

const awardsReducer = combineReducers({
  items: itemsReducer,
  giftIds: giftIdsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default awardsReducer;
