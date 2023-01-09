import React, { useState, useEffect } from "react";
import { NonPureFilterComponent } from "../FilterComponent/NonPureFilterComponent/NonPureFilterComponent";
// import { intersectionWith, remove } from "lodash";
import { NonPureProductSummary } from "../NonPureProductSummary/NonPureProductSummary";
import { useSelector } from "react-redux";
import { selectFilterSlice } from "../../Store/features/filterComponent/FilterSlice";
import { selectProductSummary } from "../../Store/features/productSummary/productSummarySlice";
export const FiltersWithProducts = () => {
  const filter = useSelector(selectFilterSlice);
  const products = useSelector(selectProductSummary);
  console.log(products, "products");
  // const productSummaries = products.map((product) => {
  //   return <ProductSummary product={product} onCompare={onCompare} />;
  // });
  return (
    <div className="filers-with-products-component">
      <div>
        <NonPureFilterComponent
          filter={filter}
          // filterGroups={filters}
          // onClear={() => {}}
          // // onClear={onChangeFilter}
          // onChange={onChangeFilter}
        />
      </div>
      <div>
        <NonPureProductSummary products={products} />
      </div>
    </div>
  );
};
