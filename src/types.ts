import { ThunkDispatch } from '@reduxjs/toolkit';

export type TrainInfo = {
  departureTime: string;
  arrivalTime: string;
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
    byciclePlace: number;
  };
};

export type Stop = {
  time: string;
  city: string;
};

export type State = {
  trains: TrainInfo[];
};

export type Dispatch = ThunkDispatch<any, unknown, any>;
