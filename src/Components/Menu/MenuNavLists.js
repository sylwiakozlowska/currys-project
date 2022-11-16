import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectMenu } from "../../Store/features/menu/menuSlice";

export const MenuNavLists = () => {
  const { listOptions, listTech } = useSelector(selectMenu);


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
    <div className="menu-list-options-component">
      <ul className="menu-list-options">{menuListOptions}</ul>
      <ul className="menu-list-tech">{menuListTech}</ul>
    </div>
  );
};
