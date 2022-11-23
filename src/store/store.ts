import trainReducer from './trainReducer';
import chooseTrainReducer from './chooseTrainReducer';
import userReducer from './userReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    trains: trainReducer,
    chosenTrain: chooseTrainReducer,
    userData: userReducer,
  },
});
