import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Store/features/menu/menuSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";
import cardDealReducer from "./Store/features/cardDeal/cardDealSlice";
import helpLinksReducer from "./Store/features/helpLinks/helpLinksSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    serviceMenu: serviceMenuReducer,
    cardDeal: cardDealReducer,
    helpLinks: helpLinksReducer,
  },
});
export default store;
// console.log(store.getState())
