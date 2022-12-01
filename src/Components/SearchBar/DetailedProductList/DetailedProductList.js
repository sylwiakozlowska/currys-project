import React from "react";
import PropTypes from "prop-types";
import "../../../styles.scss"
import {Rating} from "../../Rating/Rating";

const COUNT = 5;

export const DetailedProductList = ({ detailedProducts, onSelected }) => {
  const onClickDetailedProduct = (e, id, detailedProducts) => {
    e.preventDefault();
    console.log(e, id, detailedProducts);
    const detailedProduct = detailedProducts.find((el) => el.id === id);
    onSelected(detailedProduct);
  };
  return (
    <ul className="detailed-products">
      {detailedProducts.map(({ id, text, price, rating, src }) => (
        <li key={id}>
          <a
            className="product-link"
            href="#"
            onClick={(e) => onClickDetailedProduct(e, id, detailedProducts)}
          >
            <div className="columns product-group">
              <img
                src={src}
                alt="product image"
              />
              <div className="column is-one-third text-rating-group">
                <span className="column">{text}</span>
                <div><Rating value={rating} count={COUNT} /></div>
              </div>
              <div className="column product-price">{price}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
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
