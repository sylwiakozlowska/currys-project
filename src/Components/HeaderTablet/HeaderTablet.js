import React, { useState } from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";
import { HeaderIcons } from "../Header/HeaderIcons/HeaderIcons";
import { MenuNavTablet } from "../MenuTablet/MenuNavTablet/MenuNavTablet";

export const HeaderTablet = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClose = () => {
    setOpenMenu(false);
  };
  return (
    <section className="header-tablet-component">
      <div className="header-tablet-logo-wrapper">
        <img src={logo} />
      </div>
      <div className="header-tablet-search-wrapper">search</div>
      <div className="header-tablet-icons-wrapper">
        <HeaderIcons />
        <a
          href="#"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <i className="glyph menu-icon"></i>
          <p>Menu</p>
        </a>
        {openMenu && <MenuNavTablet onClose={onClose} />}
      </div>
    </section>
  );
};
