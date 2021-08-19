import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  registerError,
  //   getCurrentUserSuccess,
} from "./authActions";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logoutSuccess]: () => initialUserState,
  //   [getCurrentUserSuccess]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.token,
  [loginSuccess]: (_, action) => action.payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
});

export default combineReducers({
  user,
  token,
  error,
});
