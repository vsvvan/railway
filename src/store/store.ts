import trainReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    trains: trainReducer,
  },
});
