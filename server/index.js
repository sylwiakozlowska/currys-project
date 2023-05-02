const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const allProducts = require("./allProducts.js");
const searchProducts = require("./searchProducts.js");
const deliveryAndCollection = require("./deliveryAndCollection.js");
const MIN_LENGTH = 2;

app.get("/delayed-response", (req, res) => {
  setTimeout(() => {
    res.json("This response was delayed by 3 seconds.");
  }, 2000);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/products", (req, res) => {
  console.log(allProducts, "allProducts");
  const query = req.query.q;
  console.log(query);
  setTimeout(() => {
    res.json(
      allProducts.filter(({ title }) => new RegExp(query, "i").test(title))
    );
  }, 2000);
});

// app.get("/products", (req, res) => {
//   const { searchTerm } = req.query;
//   res.send(`?q=${searchTerm}`);
// });
app.get("/search", (req, res) => {
  const query = req.query.q;
  console.log(query);
  setTimeout(() => {
    res.json({
      simpleProducts: searchProducts.simpleProducts.filter(({ text }) =>
        new RegExp(query, "i").test(text)
      ),
      detailedProducts: searchProducts.detailedProducts
        .filter(({ text }) => new RegExp(query, "i").test(text))
        .slice(0, 2),
    });
  }, 2000);
});
app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = allProducts.find(
    (product) => product.id === Number(id)
  );

  res.json(singleProduct);
  console.log("singleProduct", singleProduct);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.get(`/products?q=${searchTerm}`, (req, res) => {
//      let q = req.query.q;
//  let searchTerm = req.query.searchTerm;
//     // let articles = await Article.findAll().paginate({products: products, q: q}).exec();
//   const items = products.filter(({ title }) =>
//     new RegExp(searchTerm, "i").test(title)
//   );

// res.render("products", {
//   items: items,
// });
// console.log(items, "items");

// app.get("/product/", (req, res) => {
//   console.log(deliveryAndCollection, "deliveryAndCollection");
//   res.json(deliveryAndCollection);
// });

// app.get("/product", (req, res) => {
//   // const { id } = req.params;
//   const payload = req.query.search;
//     const { detailedProducts } = allProducts;
//   const detailedProduct = detailedProducts.filter(
//     ({ id, text, price, rating, imageUrl }) =>
//       new RegExp( payload,"i").test(text, id)
//   );
//   console.log(detailedProduct)
//   res.json(detailedProduct);
// });
