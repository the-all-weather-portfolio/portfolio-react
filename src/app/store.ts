import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ratioReducer from '../features/ratio/ratioSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    ratio: ratioReducer,
  },
});
