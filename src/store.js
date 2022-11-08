import { configureStore } from "@reduxjs/toolkit";
import menuNavReducer from "./Store/features/menuNav/menuNavSlice";

export const store = configureStore({
  reducer: { menuNav: menuNavReducer },
});
export default store;
// console.log(store.getState())