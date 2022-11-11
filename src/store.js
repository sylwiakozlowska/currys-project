import { configureStore } from "@reduxjs/toolkit";
import menuNavReducer from "./Store/features/menuNav/menuNavSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";
import cardDealReducer from "./Store/features/cardDeal/cardDealSlice";

export const store = configureStore({
  reducer: { menuNav: menuNavReducer, serviceMenu: serviceMenuReducer, cardDeal: cardDealReducer  },
});
export default store;
// console.log(store.getState())
