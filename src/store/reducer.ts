import data from '../train.json';
import { createSlice } from '@reduxjs/toolkit';
import { State } from '../types';

const initialState = data;

export const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {},
});

export const selectTrains = (state: State) => state.trains;

export default trainSlice.reducer;
