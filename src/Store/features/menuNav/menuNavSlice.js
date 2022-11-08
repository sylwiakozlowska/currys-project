import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOptions: [
    { id: 0, text: "Appliances", menuIcon: "icon-washingmachine" },
    { id: 1, text: "TV & Audio", menuIcon: "icon-tv" },
    { id: 2, text: "Computing", menuIcon: "icon-computing" },
    { id: 3, text: "Gaming", menuIcon: "icon-games" },
    { id: 4, text: "Cameras", menuIcon: "icon-cameras" },
    { id: 5, text: "Phones", menuIcon: "icon-phones" },
    { id: 6, text: "Smart Tech", menuIcon: "icon-smarttech" },
    { id: 7, text: "Home & Outdoor", menuIcon: "icon-home" },
  ],
  listTech: [
    { id: 0, text: "Help & Services", menuIcon: "icon-help" },
    { id: 1, text: "Brands", menuIcon: "icon-brands" },
    { id: 2, text: "Deals", menuIcon: "icon-deals" },
  ],
};
export const menuNavSlice = createSlice({
  name: "menuNav",
  initialState,
  reducers: {},
});

// export const {  } = menuNavSlice.actions
//reducer name doesnt need to be the same as slice
export const selectMenuNav = (state) => {
  return state.menuNav;
};
export default menuNavSlice.reducer;
