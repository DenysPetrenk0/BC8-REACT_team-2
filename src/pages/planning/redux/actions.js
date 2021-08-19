import { createAction } from '@reduxjs/toolkit';

export const createTaskRequest = createAction('task/createTaskRequest');
export const createTaskSuccess = createAction('task/createTaskSuccess');
export const createTaskError = createAction('task/createTaskError');

export const getTaskRequest = createAction('tasks/getTaskRequest');
export const getTaskSuccess = createAction('tasks/getTaskSuccess');
export const getTaskError = createAction('tasks/getTaskError');
