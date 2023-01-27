import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchStock } from "./SearchStock";
import { selectProductSummary2 } from "../../Store/features/productSummary/productSummarySlice";
import {
  selectLocation,
  setSearchLocation,
} from "../../Store/features/location/locationSlice";
export const SearchStockWrapper = () => {
  const { id } = useParams();
  const product = useSelector((state) => selectProductSummary2(state, id));
  const { deliveries } = product;
  const locations = useSelector(selectLocation);
  const dispatch = useDispatch();
  console.log("locations", locations);

  const onChangeText = (value) => {
    dispatch(setSearchLocation(value));
    console.log("value11", value);
  };
  const onClickSearch = () => {
    console.log("search");
  };
  return (
    <div className="search-stock-wrapper">
      <SearchStock
        deliveries={deliveries}
        locations={locations}
        onChange={onChangeText}
        onClick={onClickSearch}
      />
    </div>
  );
};
