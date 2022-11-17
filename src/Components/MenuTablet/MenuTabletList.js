import React from "react";
import classNames from "classnames";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectMenu } from "../../Store/features/menu/menuSlice";

export const MenuTabletList = () => {
  const { listOptions, listTech } = useSelector(selectMenu);

  const menuListOptions = listOptions.map(({ id, menuIcon, text, icon }) => {
    const expandMenuRightIcon = classNames("glyph", icon);
    const menuIcons = classNames("glyph", menuIcon);
    return (
      <li className="list-options" key={id}>
        <div className="icon-wrapper">
          <i className={menuIcons}></i>
        </div>
        <a href="#" className="list-options-link">
          <p>{text}</p>
        </a>
        <div className="arrow-icon-menu-tablet">
          <i className={expandMenuRightIcon}></i>
        </div>
      </li>
    );
  });
  const menuListTech = listTech.map(({ id, text, icon }) => {
    const expandMenuRightIcon = classNames("glyph", icon);
    return (
      <li className="list-tech" key={id}>
        <a className="list-tech-link">{text}</a>
        <div className="arrow-icon-menu-tablet">
          <i className={expandMenuRightIcon}></i>
        </div>
      </li>
    );
  });
  return (
    <div className="list-options-component">
      <ul className="menu-nav-tablet-list-options">{menuListOptions}</ul>
      <ul className=" menu-nav-tablet-list-tech">{menuListTech}</ul>
    </div>
  );
};
