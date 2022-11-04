import React from "react";
import "../../styles.scss";

const helpLinks = [
  "Help & Support",
  "Track my order & repair",
  "Returns",
  "Spread the cost",
  "Gift cards",
  "TechTalk",
  "Business",
];
export const HelpLinks = () => {
  const helpLinksMenu = helpLinks.map((helpLink) => {
    return (
      <li className="help-links-list">
        <a href="#" className="help-link">
          {helpLink}
        </a>
      </li>
    );
  });
  return (
    <div className="help-links-component">
      <ul className="help-links-content">{helpLinksMenu}</ul>
    </div>
  );
};
