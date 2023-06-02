import React from "react";
import "../../styles.scss";

const footerLinks = {
  websiteLinks: [
    { id: 0, text: "Currys Business" },
    { id: 1, text: "Currys Ireland" },
    { id: 2, text: "Partmaster" },
    { id: 3, text: "Currys Broadband" },
  ],
  aboutUsLinks: [
    { id: 0, text: "Corporate site" },
    { id: 1, text: "Careers" },
    { id: 2, text: "PR & media" },
    { id: 3, text: "Modern slavery statement" },
    { id: 4, text: "Corporate social responsibility" },
  ],
};
export const FooterLinks = () => {
  const { websiteLinks, aboutUsLinks } = footerLinks;
  const footerWebsiteLinks = websiteLinks.map((websiteLink) => {
    const { text } = websiteLink;
    return (
      <li className="website-link">
        <a href="#">{text}</a>
      </li>
    );
  });
  const footerAboutUsLinks = aboutUsLinks.map((aboutUsLink) => {
    const { text } = aboutUsLink;
    return (
      <li className="about-link">
        <a href="#">{text}</a>
      </li>
    );
  });
  return (
    <nav className="footer-links">
      <div className="footer-links-content">
        <p>Our Websites</p>
        <ul className="footer-website-links">{footerWebsiteLinks}</ul>
        <p>About us</p>
        <ul className="footer-about-links">{footerAboutUsLinks}</ul>
      </div>
    </nav>
  );
};
