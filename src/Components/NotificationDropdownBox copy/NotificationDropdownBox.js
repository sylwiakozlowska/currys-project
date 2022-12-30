import React, { useState } from "react";

export const NotificationDropdownBox = ({ children }) => {
  const [shownNotification, setShownNotification] = useState(false);

  let icon;
  let text;
  if (shownNotification) {
    text = <span>Close</span>;
    icon = <i className="glyph icon-arrow-up"></i>;
    console.log("closed");

    console.log("open");
  } else {
    text = <span>Brief product description</span>;
    icon = <i className="glyph icon-arrow-down"></i>;
  }
  return (
    <div className="notification-dropdown-box-component">
      <div className="notification-drop-component">
        <div className="notification-content">
          <button
            className="content"
            onClick={() => setShownNotification((current) => !current)}
          >
            {text}
            {icon}
          </button>
        </div>
        {shownNotification && <div>{children}</div>}
      </div>
    </div>
  );
};
