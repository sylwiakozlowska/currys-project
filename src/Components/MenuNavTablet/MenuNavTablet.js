import React from "react";
import "../../styles.scss";
// import { selectMenuNav } from "../../Store/features/menuNav/menuNavSlice";
// import { useSelector } from "react-redux";

export const MenuNavTablet = () => {
  return (
    <nav className="menu-nav-tablet-component">
      <a href="#">
        <i className="glyph menu-icon"></i>
        <p>Menu</p>
      </a>
    </nav>
  );
};
