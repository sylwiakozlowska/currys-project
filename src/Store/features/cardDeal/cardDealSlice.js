import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dealOptions: [
    {
      id: 0,
      src: "https://media.currys.biz/i/currysprod/wk33-grid-pay-in-3?$webpMedium$",
      alt: "Pay in 3",
    },
    {
      id: 1,
      src: "https://media.currys.biz/i/currysprod/wk33-grid-gaming-consoles?$jpegSmall$",
      alt: "Console Games",
    },
    {
      id: 2,
      src: "	https://media.currys.biz/i/currysprod/wk33-grid-lstv-sony?$webpMedium$",
      alt: "Televisions and gift card offer",
    },
  ],
  dealSaveOptions: [
    {
      id: 0,
      src: "https://media.currys.biz/i/currysprod/wk32-block-iPad-ifc24-v2?$webpMedium$",
      alt: "iPad Pro",
    },
    {
      id: 1,
      src: "https://media.currys.biz/i/currysprod/wk33-block-macbook?$webpMedium$",
      alt: "MacBook",
    },
    {
      id: 1,
      src: "	https://media.currys.biz/i/currysprod/wk31-block-APPLE-watch-v2?$webpMedium$",
      alt: "Apple Watches",
    },
    {
      id: 1,
      src: "	https://media.currys.biz/i/currysprod/wk33-block-apple-airpods-2nd-gen-top?$webpMedium$",
      alt: "Apple Airpods 2nd GEN",
    },
  ],
};
export const cardDealSlice = createSlice({
  name: "cardDeal",
  initialState,
  reducers: {},
});

// export const {  } = cardDealSlice.actions
//reducer name doesnt need to be the same as slice
export const selectCardDeal = (state) => {
  return state.cardDeal;
};
export default cardDealSlice.reducer;
