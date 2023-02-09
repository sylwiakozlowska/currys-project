import React from "react";
import { BsChevronRight } from "react-icons/bs";

const servicesAndSupportInfo = [
  {
    id: 0,
    title: "How to pair your Apple Watch with your iPhone",
    text: "Follow these simple steps to pair your Apple Watch and iPhone",
  },
  {
    id: 1,
    title: "How to pair your Apple Watch with your iPhone",
    text: "Follow these simple steps to pair your Apple Watch and iPhone",
  },
  {
    id: 2,
    title: "How to pair your Apple Watch with your iPhone",
    text: "Follow these simple steps to pair your Apple Watch and iPhone",
  },
  {
    id: 3,
    title: "How to pair your Apple Watch with your iPhone",
    text: "Follow these simple steps to pair your Apple Watch and iPhone",
  },
];
export const ServicesAndSupport = () => {
  const servicesAndSupportList = servicesAndSupportInfo.map((info) => {
    const { id, title, text } = info;
    let icon = <BsChevronRight />;
    return (
      <li className="services-and-support-info">
        <a>
          <p>{title}</p>
          <p>{text}</p>
        </a>
        <div>{icon}</div>
      </li>
    );
  });
  return (
    <div className="services-and-support-component">
      <ul>{servicesAndSupportList}</ul>
    </div>
  );
};
