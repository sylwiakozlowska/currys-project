import React from "react";
import { FilterComponent } from "../FilterComponent/FilterComponent";
// import { intersectionWith, remove } from "lodash";
import { NonPureProductSummary } from "../ProductSummary/NonPureProductSummary/NonPureProductSummary";
// import {
// setSearchTerm} from "../../Store/features/searchBar/searchBarSlice";
export const FiltersWithProducts = () => {
  // const productSummaries = products.map((product) => {
  //   return <ProductSummary product={product} onCompare={onCompare} />;
  // });
  return (
    <div className="filters-with-products-component">
      <div className="filters-search-results">Showing results for</div>
      <div className="tabs-search-wrapper">
        <span>Products(170)</span>
        <span>Services, expert advice & support (35)</span>
      </div>
      <div className="filters-with-products-content">
        <FilterComponent />
        <NonPureProductSummary />
      </div>
    </div>
  );
};
