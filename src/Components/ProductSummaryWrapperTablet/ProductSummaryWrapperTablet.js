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
import { FilterOptionsTablet } from "../FilterOptionsTablet/FilterOptionsTablet";
import { FilterComponentTablet } from "../FilterComponentTablet/FilterComponentTablet";
import { BsSliders } from "react-icons/bs";
import { Overlay } from "../Overlay/Overlay";

export const ProductSummaryWrapperTablet = () => {
  // const products = useSelector(selectProductSummary);
  const [showFilterComponent, setShowFilterComponent] = useState(false);
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
    <section className="product-summary-tablet-wrapper">
      <div className="filter-options-tablet-wrapper">
        <FilterOptionsTablet />
        <button
          className="button filters-component-button"
          // onClick={() => setShowFilterComponent((current) => !current)}
          onClick={() => setShowFilterComponent(true)}
        >
          <BsSliders />
          Filters
        </button>
        {showFilterComponent && <Overlay><FilterComponentTablet setShowFilterComponent={setShowFilterComponent} /></Overlay>}
      </div>
      <div className="is-hidden-mobile">{productSummaries}</div>
      <div className="is-hidden-tablet">{productSummariesMobile}</div>
    </section>
  );
};
{
  /* {products.length && (
        <ComparePanel products={productsToCompare} onClear={onCompare} />
      )} */
}
