import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOptions: [
    {
      id: 0,
      text: "Appliances",
      menuIcon: "washingmachine-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 1,
      text: "TV & Audio",
      menuIcon: "tv-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 2,
      text: "Computing",
      menuIcon: "computing-icon",
      icon: "expand-menu-right-icon",
    },
    { id: 3, text: "Gaming", menuIcon: "games-icon", icon: "expand-menu-right-icon" },
    {
      id: 4,
      text: "Cameras",
      menuIcon: "cameras-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 5,
      text: "Phones",
      menuIcon: "phones-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 6,
      text: "Smart Tech",
      menuIcon: "smarttech-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 7,
      text: "Home & Outdoor",
      menuIcon: "home-icon",
      icon: "expand-menu-right-icon",
    },
  ],
  listTech: [
    {
      id: 0,
      text: "Help & Services",
      // menuIcon: "help-icon",
      icon: "expand-menu-right-icon",
    },
    {
      id: 1,
      text: "Brands",
      // menuIcon: "brands-icon",
      icon: "expand-menu-right-icon",
    },
    { id: 2, text: "Deals",
    //  menuIcon: "icon-deals", 
     icon: "expand-menu-right-icon" },
  ],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

// export const {  } = menuNavListsSlice.actions
//reducer name doesnt need to be the same as slice
export const selectMenu = (state) => {
  return state.menu;
};
export default menuSlice.reducer;
