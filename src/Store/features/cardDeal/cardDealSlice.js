import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopDeals: [
    {id:0, src:"https://media.currys.biz/i/currysprod/top-cat-tvs-all?fmt=webp&amp;qlt=80", alt:"TV", text:"TV's" },
    {id:1, src:"https://media.currys.biz/i/currysprod/top-cat-Fans-Air?fmt=webp&amp;qlt=80", alt:"Fans &amp; Air conditioners" , text:"Fans &amp; Air conditioners" },
    {id:2, src:"https://media.currys.biz/i/currysprod/top-cat-laptops?fmt=webp&amp;qlt=80", alt:"Windows laptop" , text:"Laptops" },
    {id:3, src:"https://media.currys.biz/i/currysprod/top-cat-gifting-fathersday-2023?fmt=webp&amp;qlt=80", alt:"Gifting", text:"Gifting" },
    {id:4, src:"https://media.currys.biz/i/currysprod/top-cat-washing-machine?fmt=webp&amp;qlt=80", alt:"Washing machines" , text:"Washing machines" },
    {id:5, src:"https://media.currys.biz/i/currysprod/top-category-fridge?fmt=webp&amp;qlt=80", alt:"Fridge freezer" , text:"Fridge freezer" },
    {id:6, src:"https://media.currys.biz/i/currysprod/top-cat-Garden-outdoor?fmt=webp&amp;qlt=80", alt:"Garden &amp; Outdoor", text:"Garden &amp; Outdoor" },
    {id:7, src:"https://cdn.media.amplience.net/i/currysprod/top-cat-mobile?fmt=webp&amp;qlt=80", alt:"Mobile phones" , text:"Mobile phones" },





  ],
  latestOffers: [
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
