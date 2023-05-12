import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeliveryAndCollectionList = createAsyncThunk(
  "deliveryAndCollection/fetchDeliveryAndCollectionList",
  async () => {
    const res = await fetch("/product");
    const data = await res.json();
    // debugger
    return data;
  }
);

// export const options = {
//   delivery: [
//     {
//       id: 0,
//       date: "2023-01-25",
//       isFreeDelivery: false,
//       price: "Free",
//       slotId: "2DNN",
//       slotLabel: "Standard delivery in 3-5 working days",
//       selected: true,
//     },
//     {
//       id: 1,
//       date: "2023-01-25",
//       isFreeDelivery: false,
//       price: "£7.00",
//       slotId: "2DNN",
//       slotLabel: "All day delivery 8am to 8pm",
//       selected: false,
//     },
//     {
//       id: 2,
//       date: "2023-01-25",
//       isFreeDelivery: false,
//       price: "£10.00",
//       slotId: "2DPM",
//       slotLabel: "Afternoon 12pm to 5pm",
//       selected: false,
//     },
//     {
//       id: 3,
//       date: "2023-01-25",
//       isFreeDelivery: false,
//       price: "£10.00",
//       slotId: "2DAM",
//       slotLabel: "Morning before 12 noon",
//       selected: false,
//     },
//     {
//       id: 4,
//       date: "2023-01-25",
//       isFreeDelivery: false,
//       price: "£10.00",
//       slotId: "2DEV",
//       slotLabel: "Evening from 5pm to 10pm",
//       selected: false,
//     },
//   ],
//   collection: [
//     {
//       id: 0,
//       location: "Oxford Street",
//       address: "94-98 Oxford Street London",
//       postCode: "W1D 1BZ",
//       distance: "1.2",
//       text: "Free collection today from store",
//     },
//     {
//       id: 1,
//       location: "Old Kent Road",
//       address: "585/589 Old Kent Road, Southwark London",
//       postCode: "SE15 1LA",
//       distance: "2.4",
//       text: "Free collection today from store",
//     },
//     {
//       id: 2,
//       location: "Tottenham Court Road",
//       address: "145 - 149 Tottenham Court Road London",
//       postCode: "W1T 7NE",
//       distance: "1.8",
//       text: "Free collection today from store",
//     },
//     {
//       id: 3,
//       location: "Barbican",
//       address: "14-20 Chiswell Street Barbican London",
//       postCode: "EC1Y 4TW",
//       distance: "1.6",
//       text: "Stock delivered to store",
//     },
//     {
//       id: 4,
//       location: "Mile End Road",
//       address: "Unit 2-3 Anchor House 123 Mile End Road London",
//       postCode: "E1 4UJ",
//       distance: "2.9",
//       text: "Stock delivered to store",
//     },
//     {
//       id: 5,
//       location: "Mile End Road",
//       address: "Unit 2-3 Anchor House 123 Mile End Road London",
//       postCode: "E1 4UJ",
//       distance: "2.9",
//       text: "Stock delivered to store",
//     },
//     {
//       id: 6,
//       location: "Mile End Road",
//       address: "Unit 2-3 Anchor House 123 Mile End Road London",
//       postCode: "E1 4UJ",
//       distance: "2.9",
//       text: "Stock delivered to store",
//     },
//   ],
// };
export const deliveryAndCollectionSlice = createSlice({
  name: "deliveryAndCollection",
  initialState: {
    delivery: [],
    // collection: { local: null, other: [] },
    collection: [],
    status: "idle",
    location: null,
  },
  reducers: {
   
    chooseLocation: (state, { payload }) => {
      console.log("payload", payload);
      if (payload.id === 0) {
        state.delivery = [...state.delivery];                   // todo
        console.log("state.delivery", state.delivery);
        console.log("state.collection", state.collection);
      }
      state.location = payload;

      const sorted = [...state.collection].sort(
        (a, b) => Number(a.distance) - Number(b.distance)
      );
      console.log("sorted", sorted);
      state.collection = sorted;
      // const closest = sorted.shift();

      // console.log("closest", closest);

      // state.collection.local = closest;
      // console.log("state.collection.local", state.collection.local);

      // state.collection.other = sorted;
      // console.log("otherStores", otherStores);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveryAndCollectionList.pending, (state) => {
        // debugger
        state.status = "loading";
      
      })
      .addCase(fetchDeliveryAndCollectionList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.delivery = action.payload.delivery;
        state.collection = action.payload.collection;
      
      })
      .addCase(fetchDeliveryAndCollectionList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { chooseLocation } = deliveryAndCollectionSlice.actions;

export const selectDeliveryOptions = (state) => {
  // console.log("state", state.deliveryOptions.delivery);
  return state.deliveryAndCollection.delivery;
};
export const selectDeliveryArea = (state) => {
  return state.deliveryAndCollection.location?.text;
};
export const selectCollectionOptions = (state) => {
  // console.log("state", state.deliveryOptions.delivery);
  return state.deliveryAndCollection.collection;
};
export const selectStatus = (state) => {
  return state.deliveryAndCollection.status;
};
// return state.deliveryOptions.location
//   ? state.deliveryOptions.location.text
//   : null;

export default deliveryAndCollectionSlice.reducer;
