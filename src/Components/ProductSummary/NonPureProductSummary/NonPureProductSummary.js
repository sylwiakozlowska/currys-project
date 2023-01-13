import React, { useState } from "react";
import "../../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { ProductSummary } from "../ProductSummary";
import { ProductSummaryMobile } from "../../ProductSummaryMobile/ProductSummaryMobile";
import { selectProductSummary } from "../../../Store/features/productSummary/productSummarySlice";
// import { ComparePanel } from "../ProductSummary/ComparePanel/ComparePanel";

export const NonPureProductSummary = () => {
  const products = useSelector(selectProductSummary);
   console.log(products, "products");
  const productSummaries = products.map((product) => {
    return <ProductSummary product={product} />;
  });
  const productSummariesMobile = products.map((product) => {
    return <ProductSummaryMobile product={product} />;
  });
  return (
    <section className="product-summary-wrapper">
      {productSummaries}
      {/* {products.length && (
        <ComparePanel products={productsToCompare} onClear={onCompare} />
      )} */}
      {productSummariesMobile}
    </section>
  );
};
