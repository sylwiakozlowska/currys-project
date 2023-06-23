import React from "react";
import PropTypes from "prop-types";
import { BsTruck, BsShopWindow } from "react-icons/bs";
export const DeliveryList = ({ deliveries }) => {
  const items = deliveries.map(({ id, type }) => {
    let icon;
    let text;
    switch (type) {
      case "free-delivery":
        icon = (
          <i className="icon">
            <BsTruck />
          </i>
        );
        text = "FREE FAST delivery on orders over £40";
        break;
      case "noCollection":
        icon = (
          <i className="icon">
            <BsShopWindow />
          </i>
        );
        text = "Collection not available";
        break;
      case "free-collection":
        icon = (
          <i className="icon">
            <BsShopWindow />
          </i>
        );
        text = "Free collection (subject to availability)"
        break;
      case "free-collection-stock-availability":
        icon = (
          <i className="icon">
            <BsShopWindow />
          </i>
        );
        text = "Free collection (subject to availability)"
        break;
    }

    return (
      <li key={id} className="delivery-list">
        {icon} {text}
      </li>
    );
  });

  return <ul className="delivery-content">{items}</ul>;
};

DeliveryList.propTypes = {
  deliveries: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.string.isRequired,
    })
  ),
};
