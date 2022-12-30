import React, { useState } from "react";



export const DropdownBox = ({ title, children }) => {
  const [shown, setShown] = useState(false);

  let icon;
  if (shown) {
    icon = <i className="glyph arrow-up"></i>;
    console.log("open");
  } else {
    icon = <i className="glyph arrow-down"></i>;
    console.log("closed");
  }
  
  return (
    <div className="dropdown-box-component">
      <div className="dropdown-box-content">
        <span className="dropdown-box-title">{title}</span>
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
