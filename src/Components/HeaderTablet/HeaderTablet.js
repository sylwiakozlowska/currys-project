import React from "react";
import "../../styles.scss";
import logo from "../../assets/logo.svg";
import { HeaderIcons } from "../Header/HeaderIcons/HeaderIcons";
import { useDispatch } from "react-redux";
import { showMenu } from "../../Store/features/app/appSlice";
import { SearchBarWrapper } from "../SearchBar/SearchBarWrapper";
import { RxHamburgerMenu } from "react-icons/rx";
import {CgMenu} from "react-icons/cg";
import { Link } from "react-router-dom";

export const HeaderTablet = () => {
  const dispatch = useDispatch();
  return (
    <section className="header-tablet-component">
      <div className="header-tablet-logo-wrapper">
        <Link to="/home">
          <a href="#">
            <img src={logo} />
          </a>
        </Link>
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
          <CgMenu className="menu-icon" />
          <p>Menu</p>
        </a>
      </div>
    </section>
  );
};
