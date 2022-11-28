import React, { useState } from "react";
import "../../styles.scss";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSimpleProducts,
  setSearchTerm,
} from "../../Store/features/searchBar/searchBarSlice";
export const SearchBarWrapper = () => {
  const simpleProducts = useSelector(selectSimpleProducts);
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    dispatch(setSearchTerm(value));
    console.log("value", value);
    // onChange(value);
  };
  return (
    <div className="search-bar-wrapper">
      <SearchBar simpleProducts={simpleProducts} onChange={onChangeText} />
    </div>
  );
};
