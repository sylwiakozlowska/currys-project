import React from "react";
import { FilterComponent } from "../FilterComponent/FilterComponent";
// import { intersectionWith, remove } from "lodash";
import { NonPureProductSummary } from "../ProductSummary/NonPureProductSummary/NonPureProductSummary";


export const FiltersWithProducts = () => {
  // const productSummaries = products.map((product) => {
  //   return <ProductSummary product={product} onCompare={onCompare} />;
  // });
  return (
    <div className="filters-with-products-component">
      <div className="filters-with-products-content">
        <FilterComponent />
        <NonPureProductSummary />
      </div>
    </div>
  );
};
