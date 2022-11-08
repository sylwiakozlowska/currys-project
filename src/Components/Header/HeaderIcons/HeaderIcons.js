import React from "react";
import "../HeaderIcons/HeaderIcons.scss";
import {MenuNavTablet} from "../../MenuNavTablet/MenuNavTablet";

export const HeaderIcons = () => {
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
            <a href="#">
              <i className="glyph basket-icon"></i>
              <p>Basket</p>
            </a>
            <MenuNavTablet/>
        </div>
      </div>
    </div>
  );
};
