import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dealOptions: [
    {
      id: 0,
      src: "https://media.currys.biz/i/currysprod/wk27-hero-black-friday?$jpegSmall$",
      alt: "Let the Black Fri-Yay deals begin",
    },
    {
      id: 1,
      src: "https://media.currys.biz/i/currysprod/wk27-hero-black-friday?$jpegSmall$",
      alt: "Let the Black Fri-Yay deals begin",
    },
    {
      id: 2,
      src: "https://media.currys.biz/i/currysprod/wk27-hero-black-friday?$jpegSmall$",
      alt: "Let the Black Fri-Yay deals begin",
    },
  ],
  dealSaveOptions: [
    {
      id: 0,
      src: "https://media.currys.biz/i/currysprod/wk27-hero-small-tv-1in20-lstv?$jpegSmall$",
      alt: "LSTV Campaign - Save up to £500 on selected TVs",
    },
    {
      id: 1,
      src: "https://media.currys.biz/i/currysprod/wk27-hero-small-tv-1in20-lstv?$jpegSmall$",
      alt: "LSTV Campaign - Save up to £500 on selected TVs",
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
