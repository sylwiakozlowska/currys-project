import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const res = await fetch(`/product/${id}`);
    const data = await res.json();
    return data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState: { product: null, status: "loading", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = "loading";
      console.log(JSON.stringify(state), state.status, "state.status");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.product = action.payload;
      console.log(state.product);
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const selectProduct = (state) => {
  return state.product.product;
};

export const selectStatus = (state) => {
  return state.product.status;
};
export default productSlice.reducer;
