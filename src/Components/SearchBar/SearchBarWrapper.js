import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles.scss";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSimpleProducts,
  selectDetailedProducts,
  setSearchTerm,
} from "../../Store/features/searchBar/searchBarSlice";
import { selectProductSummary} from "../../Store/features/productSummary/productSummarySlice";
import { BrowserRouter as Link } from "react-router-dom";

export const SearchBarWrapper = () => {
  const simpleProducts = useSelector(selectSimpleProducts);
  const detailedProducts = useSelector(selectDetailedProducts);
  const dispatch = useDispatch();
  const history = useHistory();



  const onChangeText = (value) => {
    dispatch(setSearchTerm(value));
    console.log("value", value);
    // onChange(value);
  };
  const onSearchText = (text) => {
    history.push(`/products?q=${text}`);
    // dispatch(sendDataToServer(selectProductSummary))
  };

  const onSelectedSimpleItem = (item) => {
    history.push(`/products`, { selected: item });
    // console.log("onSelectedProduct", onSelectedProduct);
  };
  const onSelectedDetailedItem = (item) => {
    console.log("item",item)
    history.push(`/product/${item.id}`, { selected: item });
    // console.log("onSelectedProduct", onSelectedProduct);
  };
  return (
    <div className="search-bar-wrapper">
      <SearchBar
        simpleProducts={simpleProducts}
        detailedProducts={detailedProducts}
        onChange={onChangeText}
        onSearch={onSearchText}
        onSelectedSimpleProduct={onSelectedSimpleItem}
        onSelectedDetailedProduct={onSelectedDetailedItem}
      />
    </div>
  );
};
