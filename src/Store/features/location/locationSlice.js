import { createSlice } from "@reduxjs/toolkit";

const locations = [
  { id: 0, text: "Waterloo Station", selected: false },
  { id: 1, text: "Waverley Railway Station", selected: false },
  { id: 2, text: "Watford Junction Railway Station", selected: false },
  { id: 3, text: "Watford", selected: false },
  { id: 4, text: "Manchaster", selected: false },
];

export const locationSlice = createSlice({
  name: "location",
  initialState: [{ id: 0, text: "Waterloo Station", selected: false }],
  reducers: {
    //searchternm updated
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
  console.log("state", state);
  return state.location;
};
export default locationSlice.reducer;
