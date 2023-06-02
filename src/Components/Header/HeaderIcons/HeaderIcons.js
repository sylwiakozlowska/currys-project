import React from "react";
import "../../../styles.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { selectItemCount } from "../../../Store/features/cart/cartProductSlice";
import {
  selectSavedProducts,
  selectSavedItemCount,
} from "../../../Store/features/saved/savedProductSlice";

export const HeaderIcons = () => {
  const itemsCount = useSelector(selectItemCount);
  const savedItemsCount = useSelector(selectSavedItemCount);
  console.log(savedItemsCount, "selectSavedItemCount");
  // const savedItemsCount = useSelector(selectSavedItemCount);
  // const savedItemsCount = useSelector(selectSavedProduct);
  // console.log(savedItemsCount, "savedItemsCount,savedItemsCount")

  const basketItems = classNames("glyph basket-icon", {
    "has-count": itemsCount > 0,
  });

  const savedItems = classNames("heart-icon-header", {
    "has-count": savedItemsCount > 0,
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
            {/* <i className={savedItems} value={savedItemsCount}> */}
            <div className={savedItems} value={savedItemsCount}>
              <CiHeart />
            </div>
            {/* </i> */}
            <p>Saved</p>
          </Link>
          <Link to="/cart">
            <i className={basketItems} value={itemsCount}></i>
            <p>Basket</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
