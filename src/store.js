import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Store/features/app/appSlice";
import helpLinksReducer from "./Store/features/helpLinks/helpLinksSlice";
import searchBarReducer from "./Store/features/searchBar/searchBarSlice";
import menuReducer from "./Store/features/menu/menuSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";
import cardDealReducer from "./Store/features/cardDeal/cardDealSlice";
import productSummaryReducer from "./Store/features/productSummary/productSummarySlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    helpLinks: helpLinksReducer,
    searchBar: searchBarReducer,
    menu: menuReducer,
    serviceMenu: serviceMenuReducer,
    cardDeal: cardDealReducer,
    productSummary: productSummaryReducer,
  },
});
export default store;
// console.log(store.getState())
