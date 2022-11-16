import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectServiceMenu } from "../../Store/features/serviceMenu/serviceMenuSlice";
import Slider from "infinite-react-carousel";

const settings = {
  autoplay: true,
  autoplaySpeed: 3e3,
  wheelScroll: 1,
  slidesPerRow:3,
  centerPadding: 90,
  arrows: false,
};
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
      <ul className="service-menu-content">
        <Slider className="carousel" {...settings}>
          {serviceMenuList}
        </Slider>
      </ul>
    </nav>
  );
};
