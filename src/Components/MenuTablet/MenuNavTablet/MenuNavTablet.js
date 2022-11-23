import React from "react";
// import classNames from "classnames";
import "../../../styles.scss";
import { HelpLinks } from "../../HelpLinks/HelpLinks";
import { MenuTabletList } from "../MenuTabletList";
import { useDispatch } from "react-redux";
import { showMenu } from "../../../Store/features/app/appSlice";

export const MenuNavTablet = () => {
  const dispatch = useDispatch();

  return (
      <nav className="menu-nav-tablet-component">
        <div className="menu-nav-tablet-content">
          <div className="menu-nav-tablet-close-button">
            <button>
              <i
                className="glyph close-icon"
                onClick={() => {
                  dispatch(showMenu());
                }}
              ></i>
            </button>
          </div>
          <h1 className="menu-nav-tablet-title">Shop by category</h1>
          <MenuTabletList />
          <HelpLinks />
        </div>
      </nav>
  );
};
