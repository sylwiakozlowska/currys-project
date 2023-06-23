import { createSlice } from "@reduxjs/toolkit";

let groupId = 0;
let itemId = 0;

const initialState = {
  selectedFilterItems: [
    // { id: 0, type: "string", text: "SAMSUNG" },
    // { id: 1, type: "string", text: "LG" },
    // { id: 2, type: "rating", value: 4 },
  ],
  groups: [
    // { title: "Active filters:", filters: [{ id: 0, type: "active" }] },
    {
      id: groupId++,
      title: "Price",
      filterItems: [{ id: itemId++, type: "price", selected: false }],
    },
    {
      id: groupId++,
      title: "By Brand",
      filterItems: [
        {
          id: itemId++,
          type: "string",
          text: "SAMSUNG",
          count: 138,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "LG",
          count: 13,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "SONY",
          count: 62,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "PHILIPS",
          count: 3.5,
          selected: false,
        },
      ],
    },
    {
      id: groupId++,
      title: "Customer rating",
      filterItems: [
        {
          id: itemId++,
          type: "rating",
          value: 5,
          ratingText: "",
          count: 46,
          selected: false,
        },
        {
          id: itemId++,
          type: "rating",
          value: 4,
          ratingText: " or more ",
          count: 268,
          selected: false,
        },
        {
          id: itemId++,
          type: "rating",
          value: 3,
          ratingText: "3 or more ",
          count: 277,
          selected: false,
        },
      ],
    },
    {
      id: groupId++,
      title: "Getting it to you",
      filterItems: [
        {
          id: itemId++,
          type: "string",
          text: "To deliver",
          count: 8,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "To collect within an hour",
          count: 15,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "To collect from next day",
          count: 9,
          selected: false,
        },
      ],
    },
    {
      id: groupId++,
      title: "Type",
      filterItems: [
        {
          id: itemId++,
          type: "string",
          text: "8K TVs",
          count: 10,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "4K HDR TVs",
          count: 120,
          selected: false,
        },
        {
          id: itemId++,
          type: "string",
          text: "4K ultra HD TVs",
          count: 118,
          selected: false,
        },
      ],
    },
    {
      id: groupId++,
      title: "Color",
      filterItems: [
        {
          id: itemId++,
          type: "color",
          color: "black",
          count: 2,
          selected: false,
        },
      ],
    },
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSelected(state, { payload }) {
      const groupItems = state.groups;
      const { groupId, id, checked } = payload;
      const groupItem = groupItems.find((el) => el.id === groupId);
      const item = groupItem.filterItems.find((el) => el.id === id);
      item.selected = checked;
    },
  },
});

export const { filterSelected, addfilterActive } = filterSlice.actions;

export const selectFilterItems = (state) => {
  const selectedFilterItems = [];
  // const findSelectedItems = 
  state.filter.groups.forEach(({id:groupId, filterItems})=>{
    filterItems.forEach((item)=>{
      if(item.selected === true){
        selectedFilterItems.push({...item, groupId })
      }
    })
  })
  return selectedFilterItems;
};
export const selectFilterGroups = (state) => {
  return state.filter.groups;
};
export default filterSlice.reducer;
