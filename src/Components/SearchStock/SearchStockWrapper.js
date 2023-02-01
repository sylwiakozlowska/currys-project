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
  selectCollectionOptions,
  selectCollectionLocation,
} from "../../Store/features/deliveryAndCollection/deliveryAndCollectionSlice";
import { SearchStock } from "./SearchStock";
import { Tabs } from "../Tabs/Tabs";
import { Delivery } from "../Delivery/Delivery";
import { Collection } from "../Collection/Collection";
export const SearchStockWrapper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectSingleProductSummary(state, id));
  console.log("product", product);
  const deliveryOptions = useSelector(selectDeliveryOptions);
  const collectionOptions = useSelector(selectCollectionOptions);
  console.log(
    deliveryOptions,
    collectionOptions,
    "deliveryOptions, collectionOptions"
  );
  const location = useSelector(selectDeliveryArea);
  console.log("deliveryLocation", location);
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
    dispatch(selectCollectionLocation(location));
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
        <Tabs
          deliveryOptions={deliveryOptions}
          collectionOptions={collectionOptions}
          onClick={onChangeLocation}
          location={location}
          items={[
            {
              title: "Deliveries",
              comp: (
                <Delivery
                  deliveryOptions={deliveryOptions}
                  onClick={onChangeLocation}
                  location={location}
                ></Delivery>
              ),
            },
            {
              title: "Collection",
              comp: (
                <Collection
                  collectionOptions={collectionOptions}
                  onClick={onChangeLocation}
                  location={location}
                ></Collection>
              ),
            },
          ]}
        ></Tabs>
      )}
    </div>
  );
};
