import React from "react";
import PropTypes from "prop-types";
import { DeliveryList } from "./DeliveryList";
import { CardComponent } from "../CardComponent/CardComponent";

export const DeliveryOptions = ({ className, deliveries }) => {
  return (
    <div className="delivery-options-component">
      <CardComponent className={className}>
        <DeliveryList deliveries={deliveries} />
      </CardComponent>
    </div>
  );
};

DeliveryOptions.propTypes = {
  deliveries: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.string.isRequired,
    })
  ),
};
