import React from "react";
import { FilterComponent } from "../FilterComponent/FilterComponent";
// import { intersectionWith, remove } from "lodash";
import { ProductSummaryWrapper } from "../ProductSummaryWrapper/ProductSummaryWrapper";
import { ProductSummaryWrapperTablet } from "../ProductSummaryWrapperTablet/ProductSummaryWrapperTablet";

export const FiltersWithProducts = () => {
  return (
    <div className="filters-with-products-component">
      <div className="filters-with-products-content is-hidden-touch">
        <FilterComponent />
        <ProductSummaryWrapper />
      </div>
      <div className="filters-with-products-content-tablet is-hidden-desktop">
        <ProductSummaryWrapperTablet />
      </div>
    </div>
  );
};
