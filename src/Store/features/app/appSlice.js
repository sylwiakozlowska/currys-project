import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: { menuOpen: false },
  reducers: {
    showMenu: (state, {payload}) => {
      if (payload === undefined) {
        state.menuOpen = !state.menuOpen;
      } else {
        state.menuOpen = payload;
      }
      // state.menuOpen = payload ?? !state.menuOpen;
    },
  },
});

export const { showMenu } = appSlice.actions;
//reducer name doesnt need to be the same as slice
export const selectMenuOpen = (state) => {
  return state.app.menuOpen;
};
export default appSlice.reducer;
