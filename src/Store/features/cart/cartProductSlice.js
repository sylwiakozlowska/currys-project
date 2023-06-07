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

export const cartProductSlice = createSlice({
  name: "cartProduct",
  initialState: {
    products: [],
    // status: "loading",
  },
  reducers: {
    addToBasket(state, { payload }) {
      const product = state.products.find((el) => el.id === payload.id);
      console.log("product,product", product);
      if (product) {
        product.count++;
      } else {
        state.products.push({ ...payload, count: 1 });
      }
    },
    removeFromBasket(state, { payload }) {
      // const filteredItems = state.products.filter((el) => el.id === payload);
      // console.log("filteredItems", filteredItems);
      // return filteredItems;
      const index = state.products.findIndex((el) => el.id === payload.id);
      state.products.splice(index, 1);
    },
    setProductCount(state, { payload }) {
      const { id, count } = payload;
      const product = state.products.find((el) => el.id === id);
      product.count = Number(count);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProduct.pending, (state, action) => {
  //     state.status = "loading";
  //     console.log(JSON.stringify(state), state.status, "state.status");
  //   });
  //   builder.addCase(fetchProduct.fulfilled, (state, action) => {
  //     state.status = "succeeded";
  //     state.products = action.payload;
  //     console.log(state.products);
  //   });
  //   builder.addCase(fetchProduct.rejected, (state, action) => {
  //     state.status = "failed";
  //     state.error = action.payload;
  //   });
  // },
});

export const { addToBasket, removeFromBasket, setProductCount } =
  cartProductSlice.actions;

export const selectCartProducts = (state) => {
  return state.cart.products;
};
export const selectItemCount = (state) => {
  return state.cart.products.reduce((acc, { count }) => {
    console.log(acc, count);
    return acc + count;
  }, 0);
};

export default cartProductSlice.reducer;
