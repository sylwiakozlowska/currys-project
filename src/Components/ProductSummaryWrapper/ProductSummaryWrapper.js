import React, { useState, useEffect } from "react";
import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ProductSummary } from "../ProductSummary/ProductSummary";
import { ProductSummaryMobile } from "../ProductSummaryMobile/ProductSummaryMobile";
import {
  selectProductSummary,
  fetchData,
  selectStatus,
} from "../../Store/features/productSummary/productSummarySlice";
import { FilterOptions } from "../FilterOptions/FilterOptions";
// import RingLoader from "react-spinners/RingLoader";

const props = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color: "#4C12A1",
};

export const ProductSummaryWrapper = () => {
  // const products = useSelector(selectProductSummary);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(params.get("q")));
  }, [dispatch, fetchData, params.get("q")]);

  const products = useSelector((state) =>
    selectProductSummary(state, params.get("q"))
  );
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  const productSummaries = products.map((product) => {
    return <ProductSummary product={product} />;
  });
  // const productSummariesMobile = products.map((product) => {
  //   return <ProductSummaryMobile product={product} />;
  // });
  return (
    <section className="product-summary-wrapper">
      <FilterOptions />
      {productSummaries}
      {/* {productSummariesMobile} */}
    </section>
  );
};
