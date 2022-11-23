import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceMenu: [
    {
      id: 0,
      // serviceIcon: "deal-icon",
      text: "ShopLive 24/7, video call an expert to help you shop",
      src: "https://currysprod.a.bigcontent.io/v1/static/video-svg",

     
    },
    {
      id: 1,
      text: "You won't get it cheaper. Full stop.",
      src:"https://currysprod.a.bigcontent.io/v1/static/price-promise-svg",      
    },
    {
      id: 2,
      text: "Spread the cost from £99 (24.9% APR representative variable)",
      src:"https://currysprod.a.bigcontent.io/v1/static/calendar-svg" 
    },
    {
      id: 3,
      text: "Free order & collect in an hour",
      src: "https://currysprod.a.bigcontent.io/v1/static/store-svg",
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
