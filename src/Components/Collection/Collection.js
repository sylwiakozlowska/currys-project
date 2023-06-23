import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import { CardComponent } from "../CardComponent/CardComponent";
import { BsChevronDown } from "react-icons/bs";

export const Collection = ({ collectionOptions, onClick, location }) => {

  const [collectionStore, setCollectionStore] = useState(
    collectionOptions[0].id
  );
  const [locationShownCount, setLocationShownCount] = useState(3);

  const onClickShowMoreStores = () => {
    setLocationShownCount((previous) => previous + 2);
  };
  //other option
  //   const sL = [];
  //   for (let i = 0; i < locationShownCount; i ++) {
  //     const { id, location, address, postCode, distance, text } =
  //     collectionOptions[i];
  //     sL.push(<li>{id}</li>)
  //   }

  const storeLocations = collectionOptions
    .slice(0, locationShownCount)
    .map((collectionOption) => {
      const { id, location, address, postCode, distance, text } =
        collectionOption;

      const onChangeCollectionStore = (e) => {
        setCollectionStore(id);
      };
      return (
        <li>
          <CardComponent>
            <input
              className="custom-radio-btn"
              type="radio"
              name="collection"
              value={collectionStore}
              checked={collectionStore === id}
              onChange={onChangeCollectionStore}
            />
            <div className="store-location-info">
              <p>{location}</p>
              <p>{address}</p>
              <p>{postCode}</p>
              <p>{distance} miles away</p>
              <p>{text}</p>
            </div>
          </CardComponent>
        </li>
      );
    });
  return (
    <div className="collection-component">
      <div className="collection-location">
        Collection available:
        <span>{location}</span>
      </div>
      <a href="#" className="change-location-link" onClick={onClick}>
        Change your location
      </a>
      <ul>{storeLocations}</ul>
      <div className="view-more-stores" onClick={onClickShowMoreStores}>
        <a href="#">View more stores</a>
        <button>
          <BsChevronDown />
        </button>
      </div>
    </div>
  );
};
