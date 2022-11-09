import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectServiceMenu } from "../../Store/features/serviceMenu/serviceMenuSlice";

export const ServiceMenu = () => {
  const { serviceMenu } = useSelector(selectServiceMenu);
  const serviceMenuList = serviceMenu.map(({ id, serviceIcon, text }) => {
    const cn = `glyph ${serviceIcon}`;

    return (
      <li className="service-menu-list" key={id}>
        <a href="#">
          <i className={cn}></i>
          <p>{text}</p>
        </a>
      </li>
    );
  });
  return (
    <nav className="service-menu-component">
      <ul className="service-menu-content">{serviceMenuList}</ul>
    </nav>
  );
};
