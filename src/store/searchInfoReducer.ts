import { createSlice } from '@reduxjs/toolkit';

export const searchInfo = createSlice({
  name: 'searchInfo',
  initialState: null,
  reducers: {
    setSearchInfo: (state: any, action) => {
      return action.payload;
    },
    setFrom: (state: any, action) => {
      return {... state, from: action.payload}
    },
    setTo: (state: any, action) => {
      return {... state, to: action.payload}
    }
  },
});

export const { setFrom, setTo } = searchInfo.actions;

export default searchInfo.reducer;
