import React, { useState } from "react";
import "../../styles.scss";
import { ProductSummary } from "../ProductSummary/ProductSummary";
import { ProductSummaryMobile } from "../ProductSummaryMobile/ProductSummaryMobile";
// import { ComparePanel } from "../ProductSummary/ComparePanel/ComparePanel";
import { useSelector } from "react-redux";
import { selectProductSummary } from "../../Store/features/productSummary/productSummarySlice";


export const ProductSummaryWithCompare = () => {
  const [productsToCompare, setProductsToCompare] = useState([]);


  const products = useSelector(selectProductSummary);
  console.log(products, "products");
  const onCompare = (product, selected) => {
    const newProductsToCompare = [...productsToCompare];
    product.selected = selected;

    if (selected) {
      //if the product is not in the array add it
      newProductsToCompare.push(product);
    } else {
      //if the product is in the array remove it
      const foundIndex = newProductsToCompare.findIndex(
        (prod) => prod.id === product.id
      );
      newProductsToCompare.splice(foundIndex, 1);
      //   _.remove(newProductsToCompare, (prod) => prod.id === product.id);
    }
    setProductsToCompare(newProductsToCompare);
    console.log("newProductsToCompare", newProductsToCompare);
  };

  const productSummaries = products.map((product) => {
    return <ProductSummary product={product} onCompare={onCompare} />;
  });
  const productSummariesMobile = products.map((product) => {
    return <ProductSummaryMobile product={product} onCompare={onCompare} />;
  });
  return (
    <section  className="product-summary-wrapper">
      {productSummaries}
      {/* {products.length && ( */}
        {/* // <ComparePanel products={productsToCompare} onClear={onCompare} /> */}
      {/* )} */}
     {productSummariesMobile}
    </section >
  );
};
