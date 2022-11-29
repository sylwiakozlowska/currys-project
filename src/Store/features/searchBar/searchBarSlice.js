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
      text: 'JVC LT-55CF890 Fire TV Edition 55"',
      price: "£359.99",
      rating: 3,
      imageUrl: "/assets/jvc1.jpg",
    },
    {
      id: 1,
      text: 'LG 32LM6300PLA 32"',
      price: "£211.99",
      rating: 4.5,
      imageUrl: "/assets/lg.jpg",
    },
    {
      id: 2,
      text: 'Samsung UE32t4300AkXXU 32"',
      price: "£199",
      rating: 2.5,
      imageUrl: "/assets/samsung1.jpg",
    },
    {
      id: 3,
      text: 'JVC LT-40CA890 Android TV 40"',
      price: "£229.99",
      rating: 0.5,
      imageUrl: "/assets/jvc2.jpg",
    },
    {
      id: 4,
      text: 'Samsung UE50TU7020KXXU 50"',
      price: "£429",
      rating: 3.5,
      imageUrl: "/assets/samsung2.jpg",
    },
  ],
};
export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    // searchTerm: "",
    simpleProducts: [],
    detailedProducts: [],
    // dropdownOpen: true,
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
    },
  },
});

export const { setSearchTerm } = searchBarSlice.actions;

export const selectSimpleProducts = (state) => {
  return state.searchBar.simpleProducts;
};
export default searchBarSlice.reducer;
