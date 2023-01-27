import { createSlice } from "@reduxjs/toolkit";

export const deliveryOptions = {
  delivery: [
    {
      id: 0,
      date: "2023-01-25",
      fullSlotId: "2DNN",
      isFreeDelivery: false,
      price: "£7.00",
      slotId: "2DNN",
      slotLabel: "All day delivery 8am to 8pm",
    },
    {
      id: 1,
      date: "2023-01-25",
      fullSlotId: "2DPM",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DPM",
      slotLabel: "Afternoon 12pm to 5pm",
    },
    {
      id: 2,
      date: "2023-01-25",
      fullSlotId: "2DAM",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DAM",
      slotLabel: "Morning before 12 noon",
    },
    {
      id: 3,
      date: "2023-01-25",
      fullSlotId: "2DEV",
      isFreeDelivery: false,
      price: "£10.00",
      slotId: "2DEV",
      slotLabel: "Evening from 5pm to 10pm",
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
  initialState: { delivery: [], collection: [] },
  reducers: {},
});
export default deliveryOptionsSlice.reducer;
