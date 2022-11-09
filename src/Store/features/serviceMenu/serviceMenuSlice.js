import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceMenu: [
    {
      id: 0,
      serviceIcon: "tick-icon",
      text: "ShopLive 24/7, video call an expert to help you shop",
    },
    {
      id: 1,
      serviceIcon: "tick-icon",
      text: "You won't get it cheaper. Full stop.",
    },
    {
      id: 2,
      serviceIcon: "tick-icon",
      text: "Spread the cost from £99 (24.9% APR representative variable)",
    },
    {
      id: 3,
      serviceIcon: "tick-icon",
      text: "Free order &amp; collect in an hour",
    },
  ],
};
export const serviceMenuSlice = createSlice({
  name: "serviceMenu",
  initialState,
  reducers: {},
});

// export const {  } = serviceMenuSlice.actions
//reducer name doesnt need to be the same as slice
export const selectServiceMenu = (state) => {
  return state.serviceMenu;
};
export default serviceMenuSlice.reducer;
