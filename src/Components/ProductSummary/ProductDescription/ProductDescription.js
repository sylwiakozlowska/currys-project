import React from "react";
import { Rating } from "../../Rating/Rating";
import classNames from "classnames";
import { ProductOffers } from "../ProductOffers/ProductOffers";

// import PropTypes from "prop-types";
// import classNames from "classnames";

export const ProductDescription = ({
  shownNotification,
  setShownNotification,
  productDescription,
  title,
  rating,
  productOffers,
}) => {
  const productDescriptionList = productDescription.map((description) => {
    return <li key={description}>{description}</li>;
  });

  const iconClass = classNames(
    "glyph",
    { "icon-arrow-up": shownNotification },
    { "icon-arrow-down": !shownNotification }
  );
  const icon = <i className={iconClass}></i>;
  const text = shownNotification ? "Close" : "Brief product description";

  return (
    <div className="product-description-component">
      <div className="product-info">
        <h1>{title}</h1>
        <div className="product-rating">
          <Rating value={rating.value} count={rating.count}></Rating>
          <span className="product-rating-reviews">(47)</span>
        </div>
        <ul className="product-item-description">{productDescriptionList}</ul>
        <button
          className="content"
          onClick={() => setShownNotification((current) => !current)}
        >
          {text}
          {icon}
        </button>
        <div>
          {productOffers?.length ? (
            <ProductOffers offers={productOffers} max={1} />
          ) : null}
        </div>
        {/* <div> {productOffers}</div> */}
      </div>
    </div>
  );
};
