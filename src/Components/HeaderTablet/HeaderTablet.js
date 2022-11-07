import React from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";
import { HeaderIcons } from "../Header/HeaderIcons/HeaderIcons";

export const HeaderTablet = () => {
  return (
    <section className="header-tablet-component">
      <div className="header-tablet-logo-wrapper">
        <img src={logo} />
      </div>
      <div className="header-tablet-search-wrapper">search</div>
      <div className="header-tablet-icons-wrapper">
        <HeaderIcons />
      </div>
    </section>
  );
};
