import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  helpLinks: [
    "Help & Support",
    "Track my order & repair",
    "Returns",
    "Spread the cost",
    "Gift cards",
    "TechTalk",
    "Business",
  ],
};
export const helpLinksSlice = createSlice({
  name: "helpLinks",
  initialState,
  reducers: {},
});

// export const {  } =helpLinksSlice.actions
//reducer name doesnt need to be the same as slice
export const selectHelpLinks = (state) => {
  return state.helpLinks;
};
export default helpLinksSlice.reducer;