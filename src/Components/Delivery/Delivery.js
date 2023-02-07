import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
export const Delivery = ({ deliveryOptions, onClick, location }) => {
  const [selectedSlot, setSelectedSlot] = useState(deliveryOptions[0].id);
  console.log("location", location);

  const deliveryOptionList = deliveryOptions.map((deliveryOption) => {
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
      <div className="delivery-location">
        Delivery to:
        <span>{location} </span>
      </div>
      <a href="#" className="change-location-link" onClick={onClick}>
        Change your location
      </a>
      <ul>{deliveryOptionList}</ul>
    </div>
  );
};
