import React from "react";
import PropTypes from "prop-types";
import "../../../styles.scss";


export const SimpleProductList = ({ simpleProducts, onSelected }) => {
  const onClickSimpleProduct = (e, id) => {
  e.preventDefault();
  const simpleProduct = simpleProducts.find((el) => el.id === id);
  onSelected(simpleProduct);
};
  return (
  <ul className="simple-products">
    {simpleProducts.map(({ id, text }) => (
      <li key={id}>
        <a
          className="product-link"
          href="#"
          onClick={(e) => onClickSimpleProduct(e, id)}
        >
          <div className="product-group">{text}</div>
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
