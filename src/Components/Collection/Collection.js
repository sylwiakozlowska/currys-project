import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import { CardComponent } from "../CardComponent/CardComponent";

export const Collection = ({ collectionOptions, onClick, location }) => {
  console.log("collectionOptions", collectionOptions);
  const [collectionStore, setCollectionStore] = useState(
    collectionOptions[0].id
  );
  const collectionOptionList = collectionOptions.map((collectionOption) => {
    const { id, location, address, postCode, distance, text } =
      collectionOption;

    const onChangeCollectionStore = (e) => {
      setCollectionStore(id);
      console.log("clicked", id, text);
    };
    return (
      <CardComponent className="card info">
        <li>
          <div>
            <input
              type="radio"
              name="collection"
              value={collectionStore}
              checked={collectionStore === id}
              onChange={onChangeCollectionStore}
            />
          </div>
          <div>
            <p>{location}</p>
            <p>{address}</p>
            <p>{postCode}</p>
            <p>{distance}</p>
            <p>{text}</p>
          </div>
        </li>
      </CardComponent>
    );
  });
  return (
    <div className="collection-component">
      <div className="collection-location">
        Collection available: {location}
        <span></span>
      </div>
      <a href="#" className="change-location-link" onClick={onClick}>
        Change your location
      </a>
      <ul>{collectionOptionList}</ul>
    </div>
  );
};
