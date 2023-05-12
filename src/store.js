import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Store/features/app/appSlice";
import helpLinksReducer from "./Store/features/helpLinks/helpLinksSlice";
import searchBarReducer from "./Store/features/searchBar/searchBarSlice";
import menuReducer from "./Store/features/menu/menuSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";
import cardDealReducer from "./Store/features/cardDeal/cardDealSlice";
import productReducer from "./Store/features/product/productSlice";
import productSummaryReducer from "./Store/features/productSummary/productSummarySlice";
import filterReducer from "./Store/features/filterComponent/FilterSlice";
import locationReducer from "./Store/features/location/locationSlice";
import deliveryAndCollectionReducer from "./Store/features/deliveryAndCollection/deliveryAndCollectionSlice";
import cartProductReducer from "./Store/features/cart/cartProductSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartProductReducer,
    helpLinks: helpLinksReducer,
    searchBar: searchBarReducer,
    menu: menuReducer,
    serviceMenu: serviceMenuReducer,
    cardDeal: cardDealReducer,
    product: productReducer,
    productSummary: productSummaryReducer,
    filter: filterReducer,
    location: locationReducer,
    deliveryAndCollection: deliveryAndCollectionReducer,
  },
});
export default store;
// console.log(store.getState())
