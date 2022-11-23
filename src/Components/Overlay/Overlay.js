import React from "react";
import "../../styles.scss";

export const Overlay = ({ children }) => {
  return (
    <div className="overlay-component">
      <div className="overlay"></div>
      {children}
    </div>
  );
};
