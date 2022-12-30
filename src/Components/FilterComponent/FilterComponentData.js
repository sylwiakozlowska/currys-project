let groupId = 0;

export const filterComponentData = {
  selectedFilterItems: [
    // { id: 0, type: "string", text: "SAMSUNG" },
    // { id: 1, type: "string", text: "LG" },
    // { id: 2, type: "rating", value: 4 },
  ],
  groups: [
    // { title: "Active filters:", filters: [{ id: 0, type: "active" }] },
    { id: groupId++, title: "Price", filterItems: [{ id: 0, type: "price" }] },
    {
      id: groupId++,
      title: "By Brand",
      filterItems: [
        { id: 0, type: "string", text: "SAMSUNG", count: 138 },
        { id: 1, type: "string", text: "LG", count: 13 },
        { id: 2, type: "string", text: "SONY", count: 62 },
        { id: 3, type: "string", text: "PHILIPS", count: 35 },
      ],
    },
    {
      id: groupId++,
      title: "Customer rating",
      filterItems: [
        { id: 0, type: "rating", value: 5, ratingText: "", count: 46 },
        {
          id: 0,
          type: "rating",
          value: 4,
          ratingText: " or more ",
          count: 268,
        },
        {
          id: 0,
          type: "rating",
          value: 3,
          ratingText: "3 or more ",
          count: 277,
        },
      ],
    },
    {
      id: groupId++,
      title: "Getting it to you",
      filterItems: [
        { id: 0, type: "string", text: "To deliver", count: 82 },
        {
          id: 1,
          type: "string",
          text: "To collect within an hour",
          count: 15,
        },
        { id: 2, type: "string", text: "To collect from next day", count: 9 },
      ],
    },
    {
      id: groupId++,
      title: "Type",
      filterItems: [
        { id: 0, type: "string", text: "8K TVs", count: 10 },
        { id: 1, type: "string", text: "4K HDR TVs", count: 120 },
        { id: 2, type: "string", text: "4K ultra HD TVs", count: 118 },
      ],
    },
    {
      id: groupId++,
      title: "Color",
      filterItems: [{ id: 2, type: "color", color: "black", count: 2 }],
    },
  ],
};
