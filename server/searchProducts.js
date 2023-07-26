const allProducts = require("./allProducts.js");

const searchProducts = {
  simpleProducts: [
    { id: 0, text: "Samsung Deals" },
    { id: 1, text: "Samsung trade in" },
    { id: 2, text: "Samsung Galaxy Buds 2" },
    { id: 3, text: "Apple Iphone Deals" },
    { id: 4, text: "JVC Deals" },
  ],
  detailedProducts: allProducts.map((el) => ({
    id: el.id,
    text: el.title,
    price: el.productPrice,
    rating: el.rating,
    src: el.productImageUrl,
  })),
};

module.exports = searchProducts;
