import { createSlice } from '@reduxjs/toolkit';

export const searchInfo = createSlice({
  name: 'searchInfo',
  initialState: null,
  reducers: {
    setSearchInfo: (state: any, action) => {
      return action.payload;
    },
    setFrom: (state: any, action) => {
      return { ...state, from: action.payload };
    },
    setTo: (state: any, action) => {
      return { ...state, to: action.payload };
    },
    setDate: (state: any, action) => {
      return { ...state, date: action.payload };
    },
    setTime: (state: any, action) => {
      return {
        ...state,
        time: { hours: action.payload.hours, minutes: action.payload.minutes },
      };
    },
  },
});

export const { setFrom, setTo, setDate, setTime } = searchInfo.actions;

export default searchInfo.reducer;
