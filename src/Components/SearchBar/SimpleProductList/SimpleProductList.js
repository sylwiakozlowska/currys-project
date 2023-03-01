import React from "react";
import PropTypes from "prop-types";
import "../../../styles.scss";

export const SimpleProductList = ({ simpleProducts, onSelected }) => {
  debugger
  const onClickSimpleProduct = (e, simpleProduct) => {
    e.preventDefault();
    onSelected(simpleProduct);
    debugger
  };
  return (
    <ul className="simple-products">
      {simpleProducts.map((simpleProduct) => (
        <li key={simpleProduct.id}>
          <a
            className="product-link"
            href="#"
            onClick={(e) => onClickSimpleProduct(e, simpleProduct)}
          >
            <div className="product-group">{simpleProduct.text}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

SimpleProductList.propTypes = {
  simpleProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

SimpleProductList.defaultProps = {
  /**
 Getting an empty array
  */
  simpleProducts: [],
};
