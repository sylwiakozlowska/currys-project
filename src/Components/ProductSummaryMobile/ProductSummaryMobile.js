import React, { useState } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { ProductImage } from "../ProductSummary/ProductImage/ProductImage";
import { Rating } from "../Rating/Rating";
import { CiHeart } from "react-icons/ci";
import { DeliveryOptions } from "../DeliveryOptions/DeliveryOptions";
import { PriceStatus } from "../ProductSummary/ProductPrice/PriceStatus/PriceStatus";
import { ExtraInfo } from "../ProductSummary/ProductPrice/ExtraInfo/ExtraInfo";
import { ProductOffers } from "../ProductSummary/ProductOffers/ProductOffers";
export const ProductSummaryMobile = ({ product, onCompare }) => {
  const { rating, productPrice, savedMoney, extraInfo, productOffers } =
    product;
  const checkClicked = (state) => {
    onCompare(product, state);
  };
  return (
    <div className="product-summary-component-mobile">
      <div className="product-summary-mobile">
        <div className="product-summary-content-mobile">
          <a href="#" className="product-name-link-mobile">
            <h1 className="product-title-mobile">{product.title}</h1>
            <CiHeart className="heart-icon" />
          </a>
          <div className="product-rating">
            <Rating value={rating.value} count={rating.count}></Rating>
            <span className="product-rating-reviews">(47)</span>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <ProductImage
                productImageUrl={product.productImageUrl}
                formatBadges={product.formatBadges}
              />
            </div>
            <div className=" column product-price-component">
              <PriceStatus productPrices={productPrice} saved={savedMoney} />
              <div className="extra-info-component">
                <ExtraInfo extraInfo={extraInfo} />
              </div>
            </div>
          </div>
          <div className="product-offers-component">
            {productOffers?.length ? (
              <ProductOffers offers={productOffers} max={1} />
            ) : null}
          </div>
          <DeliveryOptions
            className="primary"
            deliveries={product.deliveries}
          />
        </div>
      </div>
      <div>
        {/* <Compare selected={product.selected} setCompare={checkClicked} /> */}
      </div>
    </div>
    // </div>
  );
};
// ProductSummary.propTypes = {
//   className: PropTypes.string,
// };
// ProductSummary.defaultProps = {
//   className: "",
// };
