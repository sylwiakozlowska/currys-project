import { createSlice } from "@reduxjs/toolkit";

const allProducts = {
  simpleProducts: [
    { id: 0, text: "Samsung Deals" },
    { id: 1, text: "Samsung trade in" },
    { id: 2, text: "Samsung Galaxy Buds 2" },
    { id: 3, text: "LG Deals" },
    { id: 4, text: "JVC Deals" },
  ],

  detailedProducts: [
    {
      id: 0,
      text: 'SAMSUNG Galaxy A13 - 64 GB, Black',
      price: "£129.00",
      rating: 4.5,
      src: "https://media.currys.biz/i/currysprod/M10240938_black?$g-small$&amp;fmt=auto",
    },
    {
      id: 1,
      text: 'SAMSUNG Galaxy Tab A8 10.5" Tablet - 32 GB, Graphite',
      price: "£211.99",
      rating: 4.5,
      src: "https://media.currys.biz/i/currysprod/M10240938_black?$g-small$&amp;fmt=auto",
    },
    {
      id: 2,
      text: 'Samsung UE32t4300AkXXU 32"',
      price: "£199",
      rating: 2.5,
      src: "https://media.currys.biz/i/currysprod/M10234328_black?$g-small$&amp;fmt=auto",
    },
    {
      id: 3,
      text: 'JVC LT-40CA890 Android TV 40"',
      price: "£229.99",
      rating: 0.5,
      src: "https://media.currys.biz/i/currysprod/M10234328_black?$g-small$&amp;fmt=auto",
    },
    {
      id: 4,
      text: 'SAMSUNG Galaxy Tab A8 10.5" Tablet - 32 GB, Graphite',
      price: "£429",
      rating: 3.5,
      src: "https://media.currys.biz/i/currysprod/M10234328_black?$g-small$&amp;fmt=auto",
    },
  ],
};
export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    simpleProducts: [],
    detailedProducts: [],
  },
  reducers: {
    setSearchTerm: (state, { payload }) => {
      //   state.searchTerm = payload;

      const { simpleProducts, detailedProducts } = allProducts;
      //going through array
      //if search text is the same as text
      //return arr
      state.simpleProducts = simpleProducts.filter(({ text }) =>
        new RegExp(payload, "i").test(text)
      );
      console.log(state.simpleProducts);

      state.detailedProducts = detailedProducts.filter(({ id, text, price, rating, imageUrl }) =>
        new RegExp(payload, "i").test(text)
      );
      console.log(state.detailedProducts);
    },
    
  },
});

export const { setSearchTerm } = searchBarSlice.actions;

export const selectSimpleProducts = (state) => {
  return state.searchBar.simpleProducts;
};
export const selectDetailedProducts = (state) => {
  return state.searchBar.detailedProducts;
};
export default searchBarSlice.reducer;
