import React from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <section className="header-component">
      <div className="header-logo-wrapper">
        <img src={logo} />
      </div>
      <div className="header-content-wrapper">
        <div className="header-content">
          <div className="header-search-wrapper">search</div>
          <div className="header-icons-wrapper">icons</div>
        </div>
        <div className="header-menu-nav-wrapper">menu</div>{" "}
      </div>
    </section>
  );
};
