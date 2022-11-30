import { createSlice } from '@reduxjs/toolkit';

export const searchInfo = createSlice({
  name: 'searchInfo',
  initialState: null,
  reducers: {
    setSearchInfo: (state: any, action) => {
      return action.payload;
    },
  },
});

export default searchInfo.reducer;
