import React, { useState } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { NotificationBox } from "../NotificationDropdownBox/NotificationBox/NotificationBox";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { Compare } from "./Compare/Compare";
import { Rating } from "../Rating/Rating";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  toggleSaved,
  selectSavedItemCount,
  selectSavedProduct,
} from "../../Store/features/saved/savedProductSlice";

export const ProductSummary = ({ product, onCompare }) => {
  const [shownNotification, setShownNotification] = useState(false);
  const { id, rating } = product;
  const dispatch = useDispatch();
  const isSaved = useSelector((state) => selectSavedProduct(state, Number(id)));

  // product = useSelector(selectProduct);
  console.log("id", id);
  const checkClicked = (state) => {
    onCompare(product, state);
  };

  const onClickToggleSaved = () => {
    dispatch(toggleSaved(product));
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
          <div className="product-heading-info">
            <Link to={`/product/${id}`} className="product-link">
              <h1 className="product-title title is-1">{product.title}</h1>
            </Link>
            {isSaved ? (
              <button className="button-toggle-saved" onClick={onClickToggleSaved}>
                <BsHeartFill className="heart-icon" fill="red" />
              </button>
            ) : (
              <button className="button-toggle-saved" onClick={onClickToggleSaved}>
                <BsHeart className="heart-icon" />
              </button>
            )}
          </div>
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
              <Link to={`/product/${id}`}>
                <Button className="is-outlined">View product</Button>
              </Link>
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
