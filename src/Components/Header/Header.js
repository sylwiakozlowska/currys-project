import React from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";
import { HeaderIcons } from "./HeaderIcons/HeaderIcons";
import { MenuNav } from "../Menu/MenuNav/MenuNav";
import { SearchBarWrapper } from "../SearchBar/SearchBarWrapper";
export const Header = () => {
  return (
    <section className="header-component">
      <div className="header-logo-wrapper">
        <img src={logo} />
      </div>
      <div className="header-content-wrapper">
        <div className="header-content">
          <div className="header-search-wrapper">
            <SearchBarWrapper />
          </div>
          <div className="header-icons-wrapper">
            <HeaderIcons />
          </div>
        </div>
        <div className="header-menu-nav-wrapper">
          <MenuNav />
        </div>
      </div>
    </section>
  );
};
