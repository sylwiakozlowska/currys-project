import React from "react";
import "../../../styles.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { selectItemCount } from "../../../Store/features/cart/cartProductSlice";
export const HeaderIcons = () => {
  const itemsCount = useSelector(selectItemCount);
  const basketItems = classNames("glyph basket-icon", {
    "has-count": itemsCount > 0,
  });
  const savedItems = classNames("heart-icon", {
    "has-count": itemsCount > 0,
  });
  return (
    <div className="header-icons-component">
      <div className="header-icons-content">
        <div className="header-icons">
          <a href="#">
            <i className="glyph location-icon"></i>
            <p>Stores</p>
          </a>
          <a href="#">
            <i className="glyph account-icon"></i>
            <p className="sign">Account</p>
          </a>
          <Link to="/wishlist">
            <a href="">
              <CiHeart className={savedItems} value={itemsCount} />
              <p>Saved</p>
            </a>
          </Link>
          <Link to="/cart">
            <a href="">
              <i className={basketItems} value={itemsCount}></i>
              <p>Basket</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
