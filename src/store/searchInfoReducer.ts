import { createSlice } from '@reduxjs/toolkit';
import { ConInfo } from '../types';

const initialize = () => {
  const curD = new Date();
    const defVal: ConInfo = {
      from: '',
      to: '',
      day: curD.getDate(),
      month: curD.getMonth() + 1,
      hour: curD.getHours(),
      minute: curD.getMinutes(),
    };
    return defVal;
}

export const searchInfoSlice = createSlice({
  name: 'searchInfo',
  initialState: initialize(),
  reducers: {
    setSearchInfo: (state: any, action) => {
      state.searchInfo = action.payload;
    },
  },
});
export const { setSearchInfo } =  searchInfoSlice.actions;

export default searchInfoSlice.reducer;