import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles.scss";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSimpleProducts,
  selectDetailedProducts,
  setSearchTerm,
  selectProductSummary,
} from "../../Store/features/searchBar/searchBarSlice";
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
  };
  return (
    <div className="search-bar-wrapper">
      <SearchBar
        simpleProducts={simpleProducts}
        detailedProducts={detailedProducts}
        onChange={onChangeText}
        onSearch={onSearchText}
      />
    </div>
  );
};
