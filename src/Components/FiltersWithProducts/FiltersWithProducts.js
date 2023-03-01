import React from "react";
import { FilterComponent } from "../FilterComponent/FilterComponent";
// import { intersectionWith, remove } from "lodash";
import { ProductSummaryWrapper } from "../ProductSummaryWrapper/ProductSummaryWrapper";
import { ProductSummaryWrapperTablet } from "../ProductSummaryWrapperTablet/ProductSummaryWrapperTablet";

export const FiltersWithProducts = () => {
  return (
    <div className="filters-with-products-component">
      <div className="filters-with-products-content">
        <FilterComponent />
        <ProductSummaryWrapper />
      </div>
      <div className="filters-with-products-content-tablet">
        <ProductSummaryWrapperTablet />
      </div>
    </div>
  );
};
