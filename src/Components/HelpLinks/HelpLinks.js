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
      <a>
        <li>{helpLink}</li>
      </a>
    );
  });
  return (
    <section className="help-links-component">
      <ul>{helpLinksMenu}</ul>
    </section>
  );
};
