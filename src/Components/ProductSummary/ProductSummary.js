import React, { useState } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { NotificationBox } from "../NotificationDropdownBox/NotificationBox/NotificationBox";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { Compare } from "./Compare/Compare";
import { Rating } from "../Rating/Rating";
import { CiHeart } from "react-icons/ci";
export const ProductSummary = ({ product, onCompare }) => {
  const [shownNotification, setShownNotification] = useState(false);
  const { rating } = product;

  const checkClicked = (state) => {
    onCompare(product, state);
  };
  return (
    <div className="product-summary-component">
      <div className="product-summary">
        {/* <div className=""> */}
        <ProductImage
          productImageUrl={product.productImageUrl}
          formatBadges={product.formatBadges}
        />
        {/* </div> */}
        <div className="product-summary-content">
          <a href="#" className="product-name-link">
            <h1 className="product-title title is-1">{product.title}</h1>
            <CiHeart className="heart-icon" />
          </a>

          <div className="columns">
            <div className="column">
              <div className="product-rating">
                <Rating value={rating.value} count={rating.count}></Rating>
                <span className="product-rating-reviews">(47)</span>
              </div>
              <ProductDescription
                productDescription={product.productDescription}
                shownNotification={shownNotification}
                setShownNotification={setShownNotification}
                productOffers={product.productOffers}
              />
            </div>
            <div className="column">
              <ProductPrice
                extraInfo={product.extraInfo}
                deliveries={product.deliveries}
                productOffers={product.productOffers}
                selected={product.selected}
                setCompare={checkClicked}
                productPrice={product.productPrice}
                savedMoney={product.savedMoney}
                stock={product.stock}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <Compare selected={product.selected} setCompare={checkClicked} /> */}
      {/* </div> */}
      {/* <div>{shownNotification && <NotificationBox />}</div> */}
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
