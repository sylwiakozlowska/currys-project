const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const products = require('./products.js');


app.get("/delayed-response", (req, res) => {
  setTimeout(() => {
    res.json("This response was delayed by 3 seconds.");
  }, 8000);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/products", (req, res) => {
  console.log(products, "products");
  res.json(products);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
