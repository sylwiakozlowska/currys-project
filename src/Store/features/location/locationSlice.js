import { createSlice } from "@reduxjs/toolkit";

const locations = [
  { id: 0, text: "Waterloo Station" },
  { id: 1, text: "Waverley Railway Station" },
  { id: 2, text: "Watford Junction Railway Station" },
  { id: 3, text: "Watford" },
  { id: 4, text: "Manchaster" },
];

export const locationSlice = createSlice({
  name: "location",
  initialState: [{ id: 0, text: "Waterloo Station" }],
  reducers: {
    setSearchLocation: (state, { payload }) => {
      console.log("payload", payload);
      state = locations.filter(({ text }) =>
        new RegExp(payload, "i").test(text)
      );
      console.log(state);
      return state;
    },
  },
});
export const { setSearchLocation } = locationSlice.actions;
export const selectLocation = (state) => {
  console.log("state11", state);
  return state.location;
};
export default locationSlice.reducer;
