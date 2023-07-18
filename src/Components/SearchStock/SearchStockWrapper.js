import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { selectSingleProductSummary } from "../../Store/features/productSummary/productSummarySlice";
import {
  selectLocation,
  setSearchLocation,
} from "../../Store/features/location/locationSlice";
import {
  selectDeliveryOptions,
  chooseLocation,
  selectDeliveryArea,
  selectCollectionOptions,
  selectStatus
} from "../../Store/features/deliveryAndCollection/deliveryAndCollectionSlice";
import { SearchStock } from "./SearchStock";
import { Tabs } from "../Tabs/Tabs";
import { Delivery } from "../Delivery/Delivery";
import { Collection } from "../Collection/Collection";
export const SearchStockWrapper = ({deliveries}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const product = useSelector((state) => selectSingleProductSummary(state, id));
  const deliveryOptions = useSelector(selectDeliveryOptions);
  const collectionOptions = useSelector(selectCollectionOptions);
  const status = useSelector(selectStatus);

  const location = useSelector(selectDeliveryArea);
  const locations = useSelector(selectLocation);
  const [shown, setShown] = useState(true);

  const onChangeText = (value) => {
    dispatch(setSearchLocation(value));
  };
  const onClickSearch = () => {
    console.log("search");
  };
  const onSelectedLocation = (location) => {
    dispatch(chooseLocation(location));
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
