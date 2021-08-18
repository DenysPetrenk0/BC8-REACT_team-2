import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: {
    tasks: reducer,
  },
});

export default { store };
