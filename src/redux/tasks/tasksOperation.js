import axios from 'axios';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  patchActiveTaskRequest,
  patchActiveTaskSuccess,
  patchActiveTaskError,
  toggleTaskRequest,
  toggleTaskSuccess,
  toggleTaskError,
} from './tasksAction';

// const baseToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGQiLCJzaWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGUiLCJpYXQiOjE2MjkyOTQzMjd9.pOQBlPgoQLUz3RA-ywzNM1I-etuOhfGb8XHa-eajoHs';

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
  console.log('~ bodyData', bodyData);
  console.log('~ taskId', taskId);

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

export const toggleTask = async ({ taskId, date }) => {
  try {
    return await axios.patch(`/task/switch/${taskId}`, date);
  } catch (error) {
    throw error;
  }
};

export const toggleTaskOperation =
  ({ taskId, date }) =>
  async (dispatch) => {
    try {
      dispatch(toggleTaskRequest());
      const res = await toggleTask({ taskId, date });
      dispatch(toggleTaskSuccess(res.data));
    } catch (error) {
      dispatch(toggleTaskError(error.message));
    }
  };

// , {
//       headers: { Authorization: `Bearer ${baseToken}` },
//     }

// ,
//       {
//         headers: { Authorization: `Bearer ${baseToken}` },
//       },
