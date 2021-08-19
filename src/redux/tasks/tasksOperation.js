import axios from 'axios';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  patchActiveTaskRequest,
  patchActiveTaskSuccess,
  patchActiveTaskError,
} from './tasksAction';

const baseToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGQiLCJzaWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGUiLCJpYXQiOjE2MjkyOTQzMjd9.pOQBlPgoQLUz3RA-ywzNM1I-etuOhfGb8XHa-eajoHs';

export const addTask = (title, reward) => dispatch => {
  dispatch(createTaskRequest());
  const task = {
    title,
    reward,
  };
  axios
    .post(`/task`, task, {
      headers: { Authorization: `Bearer ${baseToken}` },
    })
    .then(({ data }) => dispatch(createTaskSuccess(data)))
    .catch(error => dispatch(createTaskError(error.message)));
};

export const patchActiveTask = (taskId, bodyData) => async dispatch => {
  console.log('~ bodyData', bodyData);
  console.log('~ taskId', taskId);

  dispatch(patchActiveTaskRequest());
  try {
    const response = await axios.patch(
      `/task/single-active/${taskId}`,
      bodyData,
      {
        headers: { Authorization: `Bearer ${baseToken}` },
      },
    );
    dispatch(patchActiveTaskSuccess(response.data));
  } catch (error) {
    dispatch(patchActiveTaskError(error.message));
  }
};
