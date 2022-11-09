import { configureStore } from "@reduxjs/toolkit";
import menuNavReducer from "./Store/features/menuNav/menuNavSlice";
import serviceMenuReducer from "./Store/features/serviceMenu/serviceMenuSlice";

export const store = configureStore({
  reducer: { menuNav: menuNavReducer, serviceMenu: serviceMenuReducer },
});
export default store;
// console.log(store.getState())
