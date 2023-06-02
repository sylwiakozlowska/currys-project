import React from "react";
import "../../styles.scss";
import { BsChatText, BsTruck, BsTag } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { CiWallet, CiLocationOn } from "react-icons/ci";
import { RiHandHeartLine, RiArrowRightSLine } from "react-icons/ri";
import { TbBuildingStore, TbViewfinder } from "react-icons/tb";
import { HiShoppingBag } from "react-icons/hi";
// import {SlArrowRight} from "react-icons/sl";
import { CardComponent } from "../CardComponent/CardComponent";
import { FooterLinks } from "../FooterLinks/FooterLinks";

const footerServices = [
  { id: 0, Icon: BsChatText, text: "Contact us" },
  { id: 1, Icon: CiLocationOn, text: "Order & collect" },
  { id: 2, Icon: TbBuildingStore, text: "Stores" },
  { id: 3, Icon: TbViewfinder, text: "Track my order" },
  { id: 4, Icon: CiWallet, text: "Ways to pay" },
  { id: 5, Icon: BsTruck, text: "Delivery options" },
  { id: 6, Icon: BsTag, text: "Price promine" },
  { id: 7, Icon: RiHandHeartLine, text: "Care & repair" },
  { id: 8, Icon: HiShoppingBag, text: "Returns & cancellations" },
];
const helpServices = [
  {
    id: 0,
    text: "For advice before you buy, video call with one of our experts",
    linkText: "Shop Live",
    Icon: RiArrowRightSLine,
  },
  {
    id: 1,
    text: "Subscribe to our newsletter for the latest news & unmissable offers",
    linkText: "Sign up",
    Icon: RiArrowRightSLine,
  },
  {
    id: 2,
    text: "Get the latest tech reviews and inspiration from our blog",
    linkText: "TechTalk",
    Icon: RiArrowRightSLine,
  },
];

export const Footer = () => {
  const footerServicesList = footerServices.map((service) => {
    const { Icon, text } = service;
    return (
      <li className="service-item">
        <a href="#">
          <Icon />
          <span className="service-text">{text}</span>
        </a>
      </li>
    );
  });
  const helpServicesList = helpServices.map((helpService) => {
    const { text, linkText, Icon } = helpService;
    return (
      <li className="help-service-item">
        <span className="help-service-text">{text}</span>
        <a href="#">
          {linkText}
          <Icon />
        </a>
      </li>
    );
  });

  return (
    <div className="footer-component">
      <div className="footer-help-services-content">
        <div className="footer-help-services">
          <ul className="footer-services-list">{footerServicesList}</ul>
        </div>
        <CardComponent>
          <ul className="help-services-list">{helpServicesList}</ul>
        </CardComponent>
      </div>
    </div>
  );
};
