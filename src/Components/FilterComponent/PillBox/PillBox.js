import React from "react";

export const PillBox = ({ id, children, onClear }) => {
  return (
    <div className="pill-box-component">
      <div className="pill-box-content">
        {children}
        <span onClick={() => onClear(id)}>
          <i className="glyph cross-icon"></i>
        </span>
      </div>
    </div>
  );
};
