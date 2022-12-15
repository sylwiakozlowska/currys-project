import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";

export const ExtraInfo = ({
  extraInfo,
}) => {
  const extraInfoCosts = extraInfo.map(({ text, color }) => {
    const extraInfoStyles = `extra-info extra-info-${color}`;
    return (
      <li className={extraInfoStyles}>
        <a>{text}</a>
      </li>
    );
  });

  return (
    <div className="product-price-component">
      <ul>{extraInfoCosts}</ul>
    </div>
  );
};
