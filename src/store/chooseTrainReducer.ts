import { createSlice } from '@reduxjs/toolkit';

export const chooseTrainSlice = createSlice({
  name: 'chosenTrain',
  initialState: null,
  reducers: {
    setChosenTrain: (state: any, action) => {
      return action.payload;
    },
  },
});
export const { setChosenTrain } = chooseTrainSlice.actions;

export default chooseTrainSlice.reducer;
