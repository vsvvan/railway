import data from '../mock-data/train.json';
import { createSlice } from '@reduxjs/toolkit';
import { State, TrainInfo } from '../types';

const initialState = data;

export const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    updateDestinations: (state: TrainInfo[], action) => {
      state.map((train) => {
        train.fromDestination = action.payload.from;
        train.toDestination = action.payload.to;
      });
    },
  },
});

export const { updateDestinations } = trainSlice.actions;

export const selectTrains = (state: State) => state.trains;

export default trainSlice.reducer;
