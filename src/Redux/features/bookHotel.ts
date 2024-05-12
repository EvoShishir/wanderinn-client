import { PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "../../Pages/SingleHotel/SingleHotel";
import { ADD_HOTEL, REMOVE_HOTEL } from "../reducerTypings";

export const hotelReducer = (
  state = {
    hotels: [],
  },
  action: PayloadAction<Hotel>
) => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
      };
    case REMOVE_HOTEL:
      return removeHotel(state, action.payload);
    default:
      return state;
  }
};

const removeHotel = (state: { hotels: Hotel[] }, payload: Hotel) => {
  const itemId = payload;
  const updatedItems = state.hotels.filter((hotel) => hotel?.id !== itemId);
  return { ...state, hotels: updatedItems };
};
