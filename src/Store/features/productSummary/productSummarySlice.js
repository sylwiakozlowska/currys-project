import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    // manufactorId: "SAMSUNG",
    title: " SAMSUNG Galaxy A13 - 64 GB, Black",
    productImageUrl:
      "https://media.currys.biz/i/currysprod/M10240938_black?$g-small$&amp;fmt=auto",
    formatBadges: ["freewiew", "4kHDR"],
    productDescription: [
      "Android 12",
      "6.6 Full HD+ LCD touchscreen",
      "8 MP front camera",
      "Battery capacity: 5000 mAh",
    ],
    productOffers: [
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "another offer",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
    ],
    pricingOptions: [
      { id: 0, price: "159", text: "One-off payment", selected: false },
      { id: 1, price: "6.10", text: "per month*", selected: false },
    ],
    rating: {
      value: 3,
      count: 5,
    },
    productPrice: "1049.00",
    savedMoney: "300.00",
    deliveries: [
      { id: 0, type: "free-delivery" },
      // { id: 1, type: "noCollection" },
      { id: 2, type: "free-collection-stock-availability" },
      // { id: 3, type: "free-collection" },
    ],
    extraInfo: [
      { text: "2 year guarantee", color: "primary", url: "" },
      { text: "3 months 0% intrest", color: "primary", url: "" },
    ],
    stock: [
      {
        text: "Sorry, this item is currently out of stock.",
      },
    ],
    selected: true,
    colorVariation: [
      {
        id: 0,
        src: "https://media.currys.biz/i/currysprod/M10237191_black_SWATCH?$swatch$&fmt=auto",
        text: "black",
        selected: true,
      },
      {
        id: 1,
        src: "https://media.currys.biz/i/currysprod/M10237191_blue_SWATCH?$swatch$&fmt=auto",
        text: "blue",
        selected: false,
      },
      {
        id: 2,
        src: "https://media.currys.biz/i/currysprod/M10237191_orange_SWATCH?$swatch$&fmt=auto",
        text: "orange",
        selected: false,
      },
      {
        id: 3,
        src: "https://media.currys.biz/i/currysprod/M10237191_white_SWATCH?$swatch$&fmt=auto",
        text: "white",
        selected: false,
      },
    ],
  },
  {
    id: 1,
    // manufactorId: "SAMSUNG",
    title: " SAMSUNG Galaxy A13 - 64 GB, Black",
    productImageUrl:
      "https://media.currys.biz/i/currysprod/M10240938_black?$g-small$&amp;fmt=auto",
    formatBadges: ["freewiew", "4kHDR"],
    productDescription: [
      "Android 12",
      "6.6 Full HD+ LCD touchscreen",
      "8 MP front camera",
      "Battery capacity: 5000 mAh",
    ],
    productOffers: [
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "another offer",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
    ],
    pricingOptions: [
      { id: 0, price: "159", text: "One-off payment", selected: false },
      { id: 1, price: "6.10", text: "per month*", selected: false },
    ],
    rating: {
      value: 3,
      count: 5,
    },
    productPrice: "1049.00",
    savedMoney: "300.00",
    deliveries: [
      { id: 0, type: "free-delivery" },
      // { id: 1, type: "noCollection" },
      // { id: 2, type: "free-collection-stock-availability" },
      { id: 3, type: "free-collection" },
    ],
    extraInfo: [
      { text: "2 year guarantee", color: "special", url: "" },
      { text: "3 months 0% intrest", color: "primary", url: "" },
    ],
    stock: [
      {
        text: "Sorry, this item is currently out of stock.",
      },
    ],
    selected: true,
    colorVariation: [
      {
        id: 0,
        src: "https://media.currys.biz/i/currysprod/M10237191_black_SWATCH?$swatch$&fmt=auto",
        text: "black",
        selected: false,
      },
      {
        id: 1,
        src: "https://media.currys.biz/i/currysprod/M10237191_blue_SWATCH?$swatch$&fmt=auto",
        text: "blue",
        selected: false,
      },
      {
        id: 2,
        src: "https://media.currys.biz/i/currysprod/M10237191_orange_SWATCH?$swatch$&fmt=auto",
        text: "orange",
        selected: false,
      },
      {
        id: 3,
        src: "https://media.currys.biz/i/currysprod/M10237191_white_SWATCH?$swatch$&fmt=auto",
        text: "white",
        selected: false,
      },
    ],
  },
  {
    id: 2,
    manufactorId: "APPLE iPhone",
    title: "APPLE iPhone 11 - 64 GB, Black",
    productImageUrl:
      "https://media.currys.biz/i/currysprod/M10197969_black?$g-small$&amp;fmt='auto'",
    formatBadges: ["freewiew", "4kHDR"],
    productDescription: [
      "Android 12",
      "6.6 Full HD+ LCD touchscreen",
      "8 MP front camera",
      "Battery capacity: 5000 mAh",
    ],
    productOffers: [
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "another offer",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
      "Pay nothing for 9 months. 24.9% APR representative. (variable)*",
    ],
    pricingOptions: [
      { id: 0, price: "159", text: "One-off payment", selected: false },
      { id: 1, price: "6.10", text: "per month*", selected: false },
    ],
    rating: {
      value: 3,
      count: 5,
    },
    productPrice: "1049.00",
    savedMoney: "300.00",
    deliveries: [
      { id: 0, type: "free-delivery" },
      // { id: 1, type: "noCollection" },
      { id: 2, type: "free-collection-stock-availability" },
      // { id: 3, type: "free-collection" },
    ],
    extraInfo: [
      { text: "Back Friday & Beyond", color: "special", url: "" },
      { text: "3 months 0% intrest", color: "primary", url: "" },
    ],
    stock: [
      {
        text: "Sorry, this item is currently out of stock.",
      },
    ],
    selected: true,
    colorVariation: [
      {
        id: 0,
        src: "https://media.currys.biz/i/currysprod/M10237191_black_SWATCH?$swatch$&fmt=auto",
        text: "black",
        selected: false,
      },
      {
        id: 1,
        src: "https://media.currys.biz/i/currysprod/M10237191_blue_SWATCH?$swatch$&fmt=auto",
        text: "blue",
        selected: false,
      },
      {
        id: 2,
        src: "https://media.currys.biz/i/currysprod/M10237191_orange_SWATCH?$swatch$&fmt=auto",
        text: "orange",
        selected: false,
      },
      {
        id: 3,
        src: "https://media.currys.biz/i/currysprod/M10237191_white_SWATCH?$swatch$&fmt=auto",
        text: "white",
        selected: false,
      },
    ],
  },
];

export const productSummarySlice = createSlice({
  name: "productSummary",
  initialState,
  reducers: {
    setListOfMatchingProducts: (state, { payload }) => {
      console.log("payload1", payload);
    },
  },
});

export const { setSearchTerm, colorSelected } = productSummarySlice.actions;

export const selectSingleProductSummary = (state, id) => {
  return state.productSummary.find((summary) => summary.id === Number(id));
};
export const selectProductSummary = (state, searchTerm) => {
  return state.productSummary.filter(({ title }) =>
    new RegExp(searchTerm, "i").test(title)
  );
};

export default productSummarySlice.reducer;
