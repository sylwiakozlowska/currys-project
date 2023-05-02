import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles.scss";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSimpleProducts,
  selectDetailedProducts,
  fetchProductsList,
  // fetchDetailedProducts,
  selectStatus,
} from "../../Store/features/searchBar/searchBarSlice";
import { selectProductSummary } from "../../Store/features/productSummary/productSummarySlice";
// import { BrowserRouter as Link } from "react-router-dom";

export const SearchBarWrapper = () => {
  const simpleProducts = useSelector(selectSimpleProducts);
  const detailedProducts = useSelector(selectDetailedProducts);
  const status = useSelector(selectStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    console.log("value", value);
    dispatch(fetchProductsList(value));
  };

  const onSearchText = (text) => {
    history.push(`/products?q=${text}`);
    // dispatch(sendDataToServer(selectProductSummary))
  };

  const onSelectedSimpleItem = (item) => {
    history.push(`/products`, { selected: item });
  };
  const onSelectedDetailedItem = (item) => {
    console.log("item", item);
    // dispatch(fetchDetailedProducts());
    history.push(`/product/${item.id}`, { selected: item });
  };
  return (
    <div className="search-bar-wrapper">
      <SearchBar
        simpleProducts={simpleProducts}
        detailedProducts={detailedProducts}
        status={status}
        onChange={onChangeText}
        onSearch={onSearchText}
        onSelectedSimpleProduct={onSelectedSimpleItem}
        onSelectedDetailedProduct={onSelectedDetailedItem}
      />
    </div>
  );
};
