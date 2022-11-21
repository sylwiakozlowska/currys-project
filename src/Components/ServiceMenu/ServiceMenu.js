import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectServiceMenu } from "../../Store/features/serviceMenu/serviceMenuSlice";
import Slider from "infinite-react-carousel";

const settings = {
  rows: 1,
  autoplay: true,
  autoplaySpeed: 3e3,
  slidesToShow: 3,
  autoplayScroll: 1,
  // wheelScroll: 1,
  slidesPerRow:1,
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
