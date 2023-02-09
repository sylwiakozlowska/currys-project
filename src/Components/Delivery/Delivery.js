import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown } from "react-icons/bs";

export const Delivery = ({ deliveryOptions, onClick, location }) => {
  const [selectedSlot, setSelectedSlot] = useState(deliveryOptions[0].id);
  console.log("location", location);
  const [startDate, setStartDate] = useState(new Date());

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
      <div className="delivery-date">
        <p>Earliest delivery date:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <ul>{deliveryOptionList}</ul>
    </div>
  );
};
