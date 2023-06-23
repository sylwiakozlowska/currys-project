import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading } from "../app/appSlice";
import { useSelector, useDispatch } from "react-redux";


export const fetchProductsList = createAsyncThunk(
  "searchBar/fetchProductsList",
  async (value, {dispatch}) => {
    dispatch(showLoading(true));
    const res = await fetch(`/search/?q=${value}`);
    const data = await res.json();
    dispatch(showLoading(false));
    return data;
  }
);

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    simpleProducts: [],
    detailedProducts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // setSearchTerm: (state, { payload }) => {
    // state.searchTerm = payload;
    // const { simpleProducts, detailedProducts } = state.allProducts;
    // console.log(state.allProducts,"state.allProducts")
    // state.simpleProducts = simpleProducts.filter(({ text }) =>
    //   new RegExp(payload, "i").test(text)
    // );
    // console.log(state.simpleProducts);
    // state.detailedProducts = detailedProducts.filter(
    //   ({ id, text, price, rating, imageUrl }) =>
    //     new RegExp(payload, "i").test(text)
    // );
    // console.log(state.detailedProducts);
  },
  // setSelectedProduct:(state,{payload})=>{
  //   const { detailedProducts } = state.allProducts;
  //   const detailedProduct = detailedProducts.find((el) => el.id === payload.id);
  //   console.log("detailedProduct1",detailedProduct )
  // }

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.simpleProducts = action.payload.simpleProducts;
        state.detailedProducts = action.payload.detailedProducts;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, setSelectedProduct } = searchBarSlice.actions;

export const selectSimpleProducts = (state) => {
  return state.searchBar.simpleProducts;
};
export const selectDetailedProducts = (state) => {
  return state.searchBar.detailedProducts;
};
export const selectStatus = (state) => {
  return state.searchBar.status;
};
// export const selectAll = (state) => {
//   return state.searchBar;
// };
export default searchBarSlice.reducer;
