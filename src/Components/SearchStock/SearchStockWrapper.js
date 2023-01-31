import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleProductSummary } from "../../Store/features/productSummary/productSummarySlice";
import {
  selectLocation,
  setSearchLocation,
} from "../../Store/features/location/locationSlice";
import {
  selectDeliveryOptions,
  selectDeliveryLocation,
  selectDeliveryArea,
} from "../../Store/features/deliveryOptions/deliveryOptionsSlice";
import { SearchStock } from "./SearchStock";
import { Delivery } from "../Delivery/Delivery";
export const SearchStockWrapper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectSingleProductSummary(state, id));
  console.log("product", product);
  const options = useSelector(selectDeliveryOptions);
  const location = useSelector(selectDeliveryArea);
  const locations = useSelector(selectLocation);

  const [shown, setShown] = useState(true);

  const { deliveries } = product;
  console.log("locations", locations);

  const onChangeText = (value) => {
    dispatch(setSearchLocation(value));
    console.log("value11", value);
  };
  const onClickSearch = () => {
    console.log("search");
  };
  const onSelectedLocation = (location) => {
    console.log("select");
    dispatch(selectDeliveryLocation(location));
    setShown((state) => !state);
  };
  const onChangeLocation = () => {
    setShown((state) => !state);
  };
  return (
    <div className="search-stock-wrapper">
      {shown && (
        <SearchStock
          deliveries={deliveries}
          locations={locations}
          onChange={onChangeText}
          onClick={onClickSearch}
          onSelected={onSelectedLocation}
        />
      )}
      {!shown && (
        <Delivery
          options={options}
          onClick={onChangeLocation}
          location={location}
        />
      )}
    </div>
  );
};
