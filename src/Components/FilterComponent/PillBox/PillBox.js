import React from "react";

export const PillBox = ({ groupId, id, children, onClear }) => {
  return (
    <div className="pill-box-component">
      <div className="pill-box-content">
        {children}
        <button onClick={() => onClear(groupId, id, false)}>
          <i className="glyph close-icon"></i>
        </button>
      </div>
    </div>
  );
};
