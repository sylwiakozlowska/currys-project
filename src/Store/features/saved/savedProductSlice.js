import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProduct = createAsyncThunk(
//   "cartProduct/fetchProduct",
//   async () => {
//     const res = await fetch(`/cart`);
//     const data = await res.json();
//     return data;
//   }
// );

export const savedProductSlice = createSlice({
  name: "savedProduct",
  initialState: {
    products: [],
    // status: "loading",
  },
  reducers: {
    toggleSaved(state, { payload }) {
      // const product = state.products.find((el) => el.id === payload.id);
      const index = state.products.findIndex((el) => el.id === payload.id);

      if (index > -1) {
        state.products.splice(index, 1);
      } else {
        state.products.push({ ...payload, count: 1 });
      }
    },
    removeFromSaved(state, { payload }) {
      const index = state.products.findIndex((el) => el.id === payload.id);
      state.products.splice(index, 1);
    },
  },
});

export const { toggleSaved, removeFromSaved } = savedProductSlice.actions;

export const selectSavedProducts = (state) => {
  return state.savedProduct.products;
};
export const selectSavedProduct = (state, id) => {
  const isSaved = state.savedProduct.products.find((el) => el.id === id);
  return !!isSaved;
};
export const selectSavedItemCount = (state) => {
  return state.savedProduct.products.reduce((acc, { count }) => {
    console.log(acc, count);
    return acc + count;
  }, 0);
};
export default savedProductSlice.reducer;
