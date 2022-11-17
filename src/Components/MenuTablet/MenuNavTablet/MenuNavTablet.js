import React, { useState } from "react";
import classNames from "classnames";
import "../../../styles.scss";
import { HelpLinks } from "../../HelpLinks/HelpLinks";
import { MenuTabletList } from "../MenuTabletList";

export const MenuNavTablet = () => {
  const [openMenu, setOpenMenu] = useState("false");

  return (
    <nav className="menu-nav-tablet-component">
      <a
        href="#"
        onClick={() => {
          setOpenMenu((current) => !current);
        }}
      >
        <i className="glyph menu-icon"></i>
        <p>Menu</p>
      </a>
      {openMenu && (
        <div className="menu-nav-tablet-content">
          <div className="menu-nav-tablet-close-button">
            <button>
              <i
                className="glyph close-icon"
                onClick={() => {
                  setOpenMenu((current) => !current);
                }}
              ></i>
            </button>
          </div>
          <h1 className="menu-nav-tablet-title">Shop by category</h1>
          <MenuTabletList />
          <HelpLinks />
        </div>
      )}
    </nav>
  );
};
