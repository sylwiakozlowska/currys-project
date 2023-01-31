import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import { CardComponent } from "../CardComponent/CardComponent";

export const Delivery = ({ options, onClick, location }) => {
  const [selectedSlot, setSelectedSlot] = useState(options[0].id);
  console.log("location", location);

  const deliveryOptionList = options.map((deliveryOption) => {
    const { id, price, slotLabel } = deliveryOption;

    const onChangeDeliverySlot = (e) => {
      setSelectedSlot(id);
      console.log("clicked", id, slotLabel);
    };
    return (
      <li>
        <input
          type="radio"
          name="delivery"
          value={selectedSlot}
          checked={selectedSlot === id}
          onChange={onChangeDeliverySlot}
        />
        <p className="slot-label">{slotLabel}</p>
        <p className="price">{price}</p>
      </li>
    );
  });
  return (
    <div className="delivery-component">
      <CardComponent className="info">
        <div className="delivery-tabs">
          <a href="#" className="delivery">
            Delivery
          </a>
          <a href="#">Collection</a>
        </div>
        <div className="delivery-location">
          Delivery to:
          <span>{location} </span>
        </div>
        <a href="#" className="change-location-link" onClick={onClick}>
          Change your location
        </a>
        <ul>{deliveryOptionList}</ul>
      </CardComponent>
    </div>
  );
};
