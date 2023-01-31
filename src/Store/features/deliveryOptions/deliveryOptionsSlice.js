import { createSlice } from "@reduxjs/toolkit";

export const options = {
  delivery: [
    {
      id: 0,
      date: "2023-01-25",
      isFreeDelivery: false,
      price: "Free",
      slotId: "2DNN",
      slotLabel: "Standard delivery in 3-5 working days",
      selected: true,
    },
    {
      id: 1,
      date: "2023-01-25",
      isFreeDelivery: false,
      price: "£7.00",
      slotId: "2DNN",
      slotLabel: "All day delivery 8am to 8pm",
      selected: false,
    },
    {
      id: 2,
      date: "2023-01-25",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DPM",
      slotLabel: "Afternoon 12pm to 5pm",
      selected: false,
    },
    {
      id: 3,
      date: "2023-01-25",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DAM",
      slotLabel: "Morning before 12 noon",
      selected: false,
    },
    {
      id: 4,
      date: "2023-01-25",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DEV",
      slotLabel: "Evening from 5pm to 10pm",
      selected: false,
    },
  ],
  collection: [
    {
      id: 0,
      location: "Oxford Street",
      address: "94-98 Oxford Street London",
      postCode: "W1D 1BZ",
      distance: "1.2",
      text: "Free collection today from store",
    },
    {
      id: 1,
      location: "Tottenham Court Road",
      address: "145 - 149 Tottenham Court Road London",
      postCode: "W1T 7NE",
      distance: "1.7",
      text: "Free collection today from store",
    },
  ],
};
export const deliveryOptionsSlice = createSlice({
  name: "deliveryOptions",
  initialState: { delivery: [], collection: [], location: null },
  reducers: {
    selectDeliveryLocation: (state, { payload }) => {
      console.log("payload", payload);
      if (payload.id === 0) {
        state.delivery = [...options.delivery];
        console.log("state.delivery", state.delivery);
      }
      state.location = payload;
    },
  },
});

export const { selectDeliveryLocation } = deliveryOptionsSlice.actions;

export const selectDeliveryOptions = (state) => {
  console.log("state", state.deliveryOptions.delivery);
  return state.deliveryOptions.delivery;
};
export const selectDeliveryArea = (state) => {
  return state.deliveryOptions.location?.text;
};
// return state.deliveryOptions.location
//   ? state.deliveryOptions.location.text
//   : null;

export default deliveryOptionsSlice.reducer;
