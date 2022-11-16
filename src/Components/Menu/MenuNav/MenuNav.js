import React from "react";
import "../../../styles.scss";
import { MenuNavLists } from "../MenuNavLists";
import { useSelector } from "react-redux";
import { selectMenu } from "../../../Store/features/menu/menuSlice";

export const MenuNav = () => {

  return (
    <nav className="menu-nav-component">
     <MenuNavLists/>
    </nav>
  );
};
