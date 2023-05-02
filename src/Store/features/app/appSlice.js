import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: { menuOpen: false, loading: false},
  reducers: {
    showMenu: (state, { payload }) => {
      if (payload === undefined) {
        state.menuOpen = !state.menuOpen;
      } else {
        state.menuOpen = payload;
      }
      // state.menuOpen = payload ?? !state.menuOpen;
    },
    showLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { showMenu, showLoading } = appSlice.actions;
//reducer name doesnt need to be the same as slice
export const selectMenuOpen = (state) => {
  return state.app.menuOpen;
};
export const selectIsLoading = (state) => {
  return state.app.loading;
};
export default appSlice.reducer;
