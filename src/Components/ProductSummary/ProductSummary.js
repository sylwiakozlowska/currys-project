import React, { useState } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { NotificationBox } from "../NotificationDropdownBox/NotificationBox/NotificationBox";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { Compare } from "./Compare/Compare";
import { Rating } from "../Rating/Rating";
export const ProductSummary = ({ product, onCompare }) => {
  const [shownNotification, setShownNotification] = useState(false);
  const {rating } = product;
  // const [compare, setCompare] = useState(false);
  const checkClicked = (state) => {
    console.log("clicked", product);

    // setCompare(state);
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
        <div>
          <h1>{product.title}</h1>
          {/* <span>{product.rating}</span> */}
          
          {/* <div></div> */}
          <div className="product-rating">
          <Rating value={rating.value} count={rating.count}></Rating>
          <span className="product-rating-reviews">(47)</span>
        </div>
          <div className="columns">
            <div className="column">
              <ProductDescription
                // title={product.title}
                productDescription={product.productDescription}
                // rating={product.rating}
                shownNotification={shownNotification}
                setShownNotification={setShownNotification}
                productOffers={product.productOffers}
              />
            </div>
            <div className="column">
              <ProductPrice
                guarantee={product.guarantee}
                deliveries={product.deliveries}
                productOffers={product.productOffers}
                selected={product.selected}
                setCompare={checkClicked}
                productPrice={product.productPrice}
                savedMoney={product.savedMoney}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Compare selected={product.selected} setCompare={checkClicked} /> */}
      </div>
      <div>{shownNotification && <NotificationBox />}</div>
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
