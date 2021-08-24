import axios from 'axios';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  patchActiveTaskRequest,
  patchActiveTaskSuccess,
  patchActiveTaskError,
  addBalanceTaskRequest,
  addBalanceTaskSuccess,
  addBalanceTaskError,
} from './tasksAction';

export const addTask = (title, reward) => dispatch => {
  dispatch(createTaskRequest());
  const task = {
    title,
    reward,
  };
  axios
    .post(`/task`, task)
    .then(({ data }) => dispatch(createTaskSuccess(data)))
    .catch(error => dispatch(createTaskError(error.message)));
};

export const patchActiveTask = (taskId, bodyData) => async dispatch => {
  dispatch(patchActiveTaskRequest());
  try {
    const response = await axios.patch(
      `/task/single-active/${taskId}`,
      bodyData,
    );
    dispatch(patchActiveTaskSuccess(response.data));
  } catch (error) {
    dispatch(patchActiveTaskError(error.message));
  }
};

export const patchTaskSwitch = (taskId, date) => async dispatch => {
  dispatch(addBalanceTaskRequest());
  try {
    const { data } = await axios.patch(`/task/switch/${taskId}`, date);
    dispatch(addBalanceTaskSuccess(data));
  } catch (error) {
    dispatch(addBalanceTaskError(error.message));
  }
};
