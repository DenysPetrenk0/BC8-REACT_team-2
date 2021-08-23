import { createAction } from '@reduxjs/toolkit';

export const createTaskRequest = createAction('task/createTaskRequest');
export const createTaskSuccess = createAction('task/createTaskSuccess');
export const createTaskError = createAction('task/createTaskError');

export const patchActiveTaskRequest = createAction(
  'task/patchActiveTaskRequest',
);
export const patchActiveTaskSuccess = createAction(
  'task/patchActiveTaskSuccess',
);
export const patchActiveTaskError = createAction('task/patchActiveTaskError');

export const toggleTaskRequest = createAction("tasks/toggleTaskRequest");
export const toggleTaskSuccess = createAction("tasks/toggleTaskSuccess");
export const toggleTaskError = createAction("tasks/toggleTaskError");