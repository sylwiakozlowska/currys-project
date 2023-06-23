import React, { useState } from "react";



export const DropdownBox = ({ title, children }) => {
  const [shown, setShown] = useState(true);

  let icon;
  if (shown) {
    icon = <i className="glyph arrow-up"></i>;
  } else {
    icon = <i className="glyph arrow-down"></i>;
  }
  
  return (
    <div className="dropdown-box-component">
      <div className="dropdown-box-content">
        <h3 className="dropdown-box-title title is-3">{title}</h3>
        <span
          className="dropdownIcon"
          onClick={() => {
            setShown((current) => !current);
          }}
        >
          {icon}
        </span>
      </div>

      {shown && <div>{children}</div>}
    </div>
  );
};
