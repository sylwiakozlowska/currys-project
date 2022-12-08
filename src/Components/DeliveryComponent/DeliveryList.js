import React from "react";
import PropTypes from "prop-types";

export const DeliveryList = ({ deliveries }) => {
  const items = deliveries.map(({ id, type }) => {
    let icon;
    let text;
    switch (type) {
      case "free-delivery":
        icon = <i className="glyph tick-icon" />;
        text = "Fast, free delivery";
        break;
      case "noCollection":
        icon = <i className="glyph cross-icon" />;
        text = "Collection not available";
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
