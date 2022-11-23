import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../types';

const initialState = null;

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // @ts-ignore
    setName: (state: UserData | null, action) => {
      return { ...state, name: action.payload };
    },
    // @ts-ignore
    setSurname: (state: UserData | null, action) => {
      return { ...state, surname: action.payload };
    },
    // @ts-ignore
    setGroupAge: (state: UserData | null, action) => {
      return { ...state, passengerGroupAge: action.payload };
    },
    // @ts-ignore
    setDiscount: (state: UserData | null, action) => {
      return { ...state, discount: action.payload };
    },
    // @ts-ignore
    setEmail: (state: UserData | null, action) => {
      return { ...state, email: action.payload };
    },
    // @ts-ignore
    setRegistrationNumber: (state: UserData | null, action) => {
      return { ...state, registrationNumber: action.payload };
    },
  },
});

export const {
  setName,
  setSurname,
  setGroupAge,
  setDiscount,
  setEmail,
  setRegistrationNumber,
} = userSlice.actions;

export default userSlice.reducer;
