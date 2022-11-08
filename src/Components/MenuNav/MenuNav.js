import React from "react";
import "../../styles.scss";
// import { listOptions, listTech } from "../../assets/MenuNavData.js";
import { selectMenuNav } from "../../Store/features/menuNav/menuNavSlice";
import { useSelector } from "react-redux";

export const MenuNav = () => {
  const { listOptions, listTech } = useSelector(selectMenuNav);
  const menuListOptions = listOptions.map(({ id, text }) => {
    return (
      <li className="options" key={id}>
        <a href="#">{text}</a>
      </li>
    );
  });
  const menuListTech = listTech.map(({ id, text }) => {
    return (
      <li className="tech" key={id}>
        <a href="#">{text}</a>
      </li>
    );
  });

  return (
    <nav className="menu-nav-component">
      <ul className="menu-list-options">{menuListOptions}</ul>
      <ul className="menu-list-tech">{menuListTech}</ul>
    </nav>
  );
};
