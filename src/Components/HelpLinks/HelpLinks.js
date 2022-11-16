import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectHelpLinks } from "../../Store/features/helpLinks/helpLinksSlice";

export const HelpLinks = () => {
  const { helpLinks } = useSelector(selectHelpLinks);

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
    <div className="help-links-component ">
      <ul className="help-links-content">{helpLinksMenu}</ul>
    </div>
  );
};
