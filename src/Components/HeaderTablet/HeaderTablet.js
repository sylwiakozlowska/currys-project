import React from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";
import { HeaderIcons } from "../Header/HeaderIcons/HeaderIcons";
import { useDispatch } from "react-redux";
import { showMenu } from "../../Store/features/app/appSlice";
import { SearchBarWrapper } from "../SearchBar/SearchBarWrapper";

export const HeaderTablet = () => {
  const dispatch = useDispatch();
  return (
    <section className="header-tablet-component">
      <div className="header-tablet-logo-wrapper">
        <img src={logo} />
      </div>
      <div className="header-tablet-search-wrapper">
        <SearchBarWrapper />
      </div>
      <div className="header-tablet-icons-wrapper">
        <HeaderIcons />
        <a
          href="#"
          onClick={() => {
            dispatch(showMenu());
          }}
        >
          <i className="glyph menu-icon"></i>
          <p>Menu</p>
        </a>
      </div>
    </section>
  );
};
