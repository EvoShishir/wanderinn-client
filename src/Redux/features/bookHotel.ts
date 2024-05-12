import { PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "../../Pages/SingleHotel/SingleHotel";
import { ADD_HOTEL, REMOVE_HOTEL } from "../reducerTypings";

interface HotelState {
  hotels: Hotel[];
}

type HotelReducer = (
  state: HotelState | undefined,
  action: PayloadAction<Hotel>
) => HotelState;

export const hotelReducer: HotelReducer = (
  state = {
    hotels: [],
  },
  action: PayloadAction<Hotel>
) => {
  switch (action.type) {
    case ADD_HOTEL:
      return addHotel(state, action.payload);
    case REMOVE_HOTEL:
      return removeHotel(state, action.payload);
    default:
      return state;
  }
};

const addHotel = (state: HotelState, payload: Hotel): HotelState => {
  const hotelExists = state.hotels.some((hotel) => hotel?.id === payload?.id);
  if (!hotelExists) {
    return {
      ...state,
      hotels: [...state.hotels, payload],
    };
  }
  return state;
};

const removeHotel = (state: { hotels: Hotel[] }, payload: Hotel) => {
  const itemId = payload;
  const updatedItems = state.hotels.filter((hotel) => hotel?.id !== itemId);
  return { ...state, hotels: updatedItems };
};
