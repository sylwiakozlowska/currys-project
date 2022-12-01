import React from "react";
import PropTypes from "prop-types";
import { TiStarHalf } from "react-icons/ti";
import { TiStar } from "react-icons/ti";

export const Rating = ({ value, count }) => {
  if (value > count) {
    console.error("The value is greater than the count. Not rendering.");
    return null;
  }
  let underStars = [];
  let overStars = [];
  let integer = Math.floor(value);
  let fraction = value - integer;

  for (let i = 0; i < count; i++) {
    underStars.push(
      <span key={i} className="icon">
        <TiStar />
      </span>
    );
  }
  for (let i = 0; i < integer; i++) {
    overStars.push(
      <span key={i} className="icon">
        <TiStar />
      </span>
    );
  }
  if (fraction >= 0.5) {
    overStars.push(
      <span key={integer} className="icon">
        <TiStarHalf />
      </span>
    );
  }
  return (
    <span className="rating-component">
      <span className="grey">{underStars}</span>
      <span className="orange">{overStars}</span>
    </span>
  );
};

Rating.propTypes = {
  count: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
