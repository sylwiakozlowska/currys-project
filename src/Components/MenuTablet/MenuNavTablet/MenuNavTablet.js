import React from "react";
// import classNames from "classnames";
import "../../../styles.scss";
import { HelpLinks } from "../../HelpLinks/HelpLinks";
import { MenuTabletList } from "../MenuTabletList";

export const MenuNavTablet = ({ onClose }) => {

  return (
    <nav className="menu-nav-tablet-component">
      <div className="menu-nav-tablet-content">
        <div className="menu-nav-tablet-close-button">
          <button>
            <i className="glyph close-icon" onClick={onClose}></i>
          </button>
        </div>
        <h1 className="menu-nav-tablet-title">Shop by category</h1>
        <MenuTabletList />
        <HelpLinks />
      </div>
    </nav>
  );
};
