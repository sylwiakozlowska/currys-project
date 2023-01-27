import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Store/features/app/appSlice";
import helpLinksReducer from "./Store/features/helpLinks/helpLinksSlice";
import searchBarReducer from "./Store/features/searchBar/searchBarSlice";
import menuReducer from "./Store/features/menu/menuSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";
import cardDealReducer from "./Store/features/cardDeal/cardDealSlice";
import productSummaryReducer from "./Store/features/productSummary/productSummarySlice";
import filterReducer from "./Store/features/filterComponent/FilterSlice";
import locationReducer from "./Store/features/location/locationSlice";
import deliveryOptionsReducer from "./Store/features/deliveryOptions/deliveryOptionsSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    helpLinks: helpLinksReducer,
    searchBar: searchBarReducer,
    menu: menuReducer,
    serviceMenu: serviceMenuReducer,
    cardDeal: cardDealReducer,
    productSummary: productSummaryReducer,
    filter: filterReducer,
    location: locationReducer,
    deliveryOptions: deliveryOptionsReducer,
  },
});
export default store;
// console.log(store.getState())
