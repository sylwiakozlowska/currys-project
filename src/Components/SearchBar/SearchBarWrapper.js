import React, { useState } from "react";
import "../../styles.scss";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSimpleProducts,
  selectDetailedProducts,
  setSearchTerm,
} from "../../Store/features/searchBar/searchBarSlice";
import { BrowserRouter as Link } from "react-router-dom";

export const SearchBarWrapper = () => {
  const simpleProducts = useSelector(selectSimpleProducts);
  const detailedProducts = useSelector(selectDetailedProducts);
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    dispatch(setSearchTerm(value));
    console.log("value", value);
    // onChange(value);

  
  };
  return (
    <div className="search-bar-wrapper">
      <SearchBar
        simpleProducts={simpleProducts}
        detailedProducts={detailedProducts}
        onChange={onChangeText}
        // onSearch={onSearchText}
      />
    </div>
  );
};
