import React from "react";
import PropTypes from "prop-types";
import "../../../styles.scss";

export const SimpleProductList = ({ simpleProducts, onSelected, status }) => {
  const onClickSimpleProduct = (e, simpleProduct) => {
    e.preventDefault();
    onSelected(simpleProduct);
  };

  return (
    <>
      {simpleProducts.length > 0 && (
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
      )}
      {/* {status === "succedded" && simpleProducts.length > 0 && "no products"} */}
    </>
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
