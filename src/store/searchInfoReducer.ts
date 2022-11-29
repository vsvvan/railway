import { createSlice } from '@reduxjs/toolkit';
import { ConInfo } from '../interfaces';

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
