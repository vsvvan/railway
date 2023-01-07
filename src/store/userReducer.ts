import { createSlice } from '@reduxjs/toolkit';
import { State, UserData } from '../types';
import userData from '../mock-data/user.json';

const initialState = userData;

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // @ts-ignore
    setName: (state: UserData, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id ? { ...u, name: action.payload.name } : u,
        ),
      };
    },
    // @ts-ignore
    setSurname: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, surname: action.payload.surname }
            : u,
        ),
      };
    },
    // @ts-ignore
    setGroupAge: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, passengerGroup: action.payload.groupAge }
            : u,
        ),
      };
    },
    // @ts-ignore
    setDiscount: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, discount: action.payload.discount }
            : u,
        ),
      };
    },
    // @ts-ignore
    setEmail: (state: UserData | null, action) => {
      return { ...state, email: action.payload };
    },
    // @ts-ignore
    setRegistrationNumber: (state: UserData | null, action) => {
      return {
        ...state,
        passengerInformation: state?.passengerInformation?.map((u) =>
          u.id === action.payload.id
            ? { ...u, registrationNumber: action.payload.number }
            : u,
        ),
      };
    },
    addPassenger: (state: UserData, action) => {
      state.passengerInformation.push(action.payload);
    },
    removePassenger: (state: UserData, action) => {
      state.passengerInformation = state.passengerInformation.filter(
        (passenger) => passenger.id !== action.payload,
      );
    },
    // @ts-ignore
    changeSeat: (state: UserData, action) => {
      return {
        ...state,
        trainTicketSelection: {
          ...state.trainTicketSelection,
          seatSelection: action.payload,
        },
      };
    },
    // @ts-ignore
    changeClass: (state: UserData, action) => {
      return {
        ...state,
        trainTicketSelection: {
          ...state.trainTicketSelection,
          ticketClass: action.payload,
        },
      };
    },
    changePreferences: (state: UserData, action) => {
      state.trainTicketSelection.preferences?.push(action.payload);
    },
    removePreferences: (state: UserData, action) => {
      state.trainTicketSelection.preferences =
        state.trainTicketSelection.preferences?.filter(
          (preference) => preference !== action.payload,
        );
    },
    changeCardNumber: (state: UserData, action) => {
      state.payment.cardNumber = action.payload;
    },
    setPrice: (state: UserData, action) => {
      state.trainTicketSelection.price = action.payload;
    },
    setM: (state: UserData, action) => {
      state.payment.month = action.payload;
    },
    setY: (state: UserData, action) => {
      state.payment.year = action.payload;
    },
    setCV: (state: UserData, action) => {
      state.payment.value = action.payload;
    },
    setAgree: (state: UserData, action) => {
      state.payment.agree = action.payload;
    },
    changePM: (state: UserData, action) => {
      state.payment.paymentMethod = action.payload;
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
  addPassenger,
  removePassenger,
  changeClass,
  changeSeat,
  changePreferences,
  removePreferences,
  changeCardNumber,
  setPrice,
  setM,
  setY,
  setCV,
  setAgree,
  changePM,
} = userSlice.actions;

export const selectUsers = (state: State) =>
  state.userData.passengerInformation;

export default userSlice.reducer;
