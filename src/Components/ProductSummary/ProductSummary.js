import React, { useState } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { NotificationBox } from "../NotificationDropdownBox/NotificationBox/NotificationBox";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { Compare } from "./Compare/Compare";

export const ProductSummary = ({ product, onCompare }) => {
  const [shownNotification, setShownNotification] = useState(false);

  // const [compare, setCompare] = useState(false);
  const checkClicked = (state) => {
    console.log("clicked", product);

    // setCompare(state);
    onCompare(product, state);
  };
  return (
    <div className="product-summary-component">
      {/* <div className="one-around"> */}
      {/* <div className="sticker">
        <img
          src="https://brain-images-ssl.cdn.dixons.com/file/91/88/30/00/bwoffmarkedpricestickersale100-38819.png"
          alt="sticker"
        />
      </div> */}
      <div className="product-summary">
        <div className="product">
          <div className="product-description">
            <div>
              <ProductImage
                productImageUrl={product.productImageUrl}
                formatBadges={product.formatBadges}
              />
            </div>

            <div className="product-info">
              <ProductDescription
                title={product.title}
                productDescription={product.productDescription}
                rating={product.rating}
                shownNotification={shownNotification}
                setShownNotification={setShownNotification}
                productOffers={product.productOffers}

              />
            </div>
          </div>
        </div>
        <div className="product-price">
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
