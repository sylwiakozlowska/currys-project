const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const summaryProducts = require("./summaryProducts.js");
const allProducts = require("./allProducts.js");

app.get("/delayed-response", (req, res) => {
  setTimeout(() => {
    res.json("This response was delayed by 3 seconds.");
  }, 2000);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/products", (req, res) => {
  console.log(summaryProducts, "summaryProducts");
  res.json(summaryProducts);
});
app.get("/product", (req, res) => {
  console.log(allProducts, "allProducts");
  res.json(allProducts);
});

// app.get("/product/:id", (req, res) => {
//   // const { id } = req.params;
//   const { payload } = req.query;
//   const { detailedProducts } = allProducts;
//   const detailedProduct = detailedProducts.filter(
//     ({ id, text, price, rating, imageUrl }) =>
//       new RegExp( payload,"i").test(text, id)
//   );
//   res.json(detailedProduct);
// });
// app.get("/product/:id", (req, res) => {
//   console.log(allProducts, "allProducts");
//   res.json(allProducts);
// });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
