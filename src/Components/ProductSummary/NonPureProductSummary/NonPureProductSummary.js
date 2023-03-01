import React, { useState, useEffect } from "react";
import "../../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ProductSummary } from "../ProductSummary";
import { ProductSummaryMobile } from "../../ProductSummaryMobile/ProductSummaryMobile";
import {
  selectProductSummary,
  fetchData,
  selectStatus,
} from "../../../Store/features/productSummary/productSummarySlice";
import { FilterOptions } from "../../FilterOptions/FilterOptions";

export const NonPureProductSummary = () => {
  // const products = useSelector(selectProductSummary);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dispatch = useDispatch();

  // const products = useSelector((state) =>
  //   selectProductSummary(state, params.get("q"))
  // );
  const products = useSelector((state) =>
  selectProductSummary(state, params.get("q"))
  );
  console.log(products, "products");
  const status = useSelector(selectStatus);
  console.log(status, "status");

  useEffect(() => {
    dispatch(fetchData());
    console.log("hello");
  }, [dispatch, fetchData]);

  if (status === "loading") {
    return "loading";
  }

  const productSummaries = products.map((product) => {
    return <ProductSummary product={product} />;
  });
  const productSummariesMobile = products.map((product) => {
    return <ProductSummaryMobile product={product} />;
  });
  return (
    <section className="product-summary-wrapper">
      <FilterOptions />
      {productSummaries}
      {/* {products.length && (
        <ComparePanel products={productsToCompare} onClear={onCompare} />
      )} */}
      {productSummariesMobile}
    </section>
  );
};
