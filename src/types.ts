import { ThunkDispatch } from '@reduxjs/toolkit';

export const DiscountType: { [k in number]: string } = {
  0: 'NO DISCOUNT',
  1: 'ISIC card',
};

export const AgeGroups: { [k in number]: string } = {
  0: 'Child (0-5 yrs)',
  1: 'Child (6-15 yrs)',
  2: 'Youth (16-25 yrs)',
  3: 'Adult (26-61 yrs)',
  4: 'Adult (62+ yrs)',
};

export type TrainInfo = {
  departureTime: string;
  arrivalTime: string;
  travelDuration: string;
  fromDestination: string;
  toDestination: string;
  trainType: string;
  trainNumber: number;
  distance: number;
  price: number;
  stops: Stop[];
  capacity: {
    freePlaces1: number;
    freePlaces2: number;
    bicyclePlace: number;
  };
  date?: string;
};

export type Stop = {
  time: string;
  city: string;
};

export type UserData = {
  passengerInformation: PassengerInformation[];
  trainTicketSelection: TrainTicketSelection;
  payment: Payment;
  email: string;
};

export type PassengerInformation = {
  id: number;
  name: string;
  surname: string;
  discount: string;
  passengerGroup: number;
  registrationNumber?: string;
};

export type TrainTicketSelection = {
  ticketClass: string;
  seatSelection: string;
  price?: string;
  preferences?: string[];
};

export type Payment = {
  paymentMethod: string;
  cardNumber: string;
};

export type State = {
  trains: TrainInfo[];
  chosenTrain: TrainInfo;
  userData: UserData;
  searchInfo: any;
};

export type ConInfo = {
  from: string;
  to: string;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

export type Dispatch = ThunkDispatch<any, unknown, any>;
