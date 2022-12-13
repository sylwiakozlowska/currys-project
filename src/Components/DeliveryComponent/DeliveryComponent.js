import React from "react";
import PropTypes from "prop-types";
import { DeliveryList } from "./DeliveryList";
import { CardComponent } from "../CardComponent/CardComponent";

export const DeliveryComponent = ({ deliveries }) => {
  return (
    <div className="delivery-component">
      <CardComponent className="primary">
        <div className="delivery-options">
          <DeliveryList deliveries={deliveries} />
        </div>
      </CardComponent>
    </div>
  );
};

DeliveryComponent.propTypes = {
  deliveries: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.string.isRequired,
    })
  ),
};
