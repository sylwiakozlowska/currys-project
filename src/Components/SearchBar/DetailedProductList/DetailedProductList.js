import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles.scss";
import { Rating } from "../../Rating/Rating";

export const DetailedProductList = ({
  detailedProducts,
  onSelected,
  status,
}) => {
  console.log(detailedProducts.length, "detailedProducts")
  const shownProductListCount = 5;
  const shownProductList = detailedProducts.slice(0, shownProductListCount);
  const onClickDetailedProduct = (e, id, detailedProducts) => {
    e.preventDefault();
    const detailedProduct = detailedProducts.find((el) => el.id === id);
    onSelected(detailedProduct);
  };
  return (
    <>
      {detailedProducts.length > 0 && (
        <ul className="detailed-products">
          {shownProductList.map(({ id, text, price, rating, src }) => (
            <li key={id} className="detailed-products-list">
              <a
                className="product-link"
                href="#"
                onClick={(e) => onClickDetailedProduct(e, id, detailedProducts)}
              >
                <div className="columns product-group">
                  <img src={src} alt="product image" />
                  <div className="column is-one-third text-rating-group">
                    <span className="column">{text}</span>
                    <Rating value={rating.value} count={rating.count} />
                  </div>
                  <div className="column product-price">{price}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
      {/* {status === "succedded" && detailedProducts.length > 0 && "no products"} */}
    </>
  );
};
DetailedProductList.propTypes = {
  detailedProducts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};
DetailedProductList.defaultProps = {
  /**
 Getting an empty array
  */
  detailedProducts: [],
};
