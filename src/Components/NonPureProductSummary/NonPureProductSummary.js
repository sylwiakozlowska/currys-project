import React, { useState } from "react";
import "../../styles.scss";
import { ProductSummary } from "../ProductSummary/ProductSummary";
import { ProductSummaryMobile } from "../ProductSummaryMobile/ProductSummaryMobile";
// import { ComparePanel } from "../ProductSummary/ComparePanel/ComparePanel";


export const NonPureProductSummary = ({products}) => {
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
