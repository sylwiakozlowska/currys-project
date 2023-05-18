import React, { useState } from "react";

const titlesList = [
  { id: 0, text: "Mr" },
  { id: 1, text: "Mrs" },
  { id: 2, text: "Miss" },
  { id: 3, text: "Ms" },
];

export const DropdownComponent = () => {
  const [shown, setShown] = useState(false);
  const [title, setTitle] = useState("Title");

  let icon;
  if (shown) {
    icon = <i className="glyph arrow-up"></i>;
    console.log("open", title);
  } else {
    icon = <i className="glyph arrow-down"></i>;
    console.log("closed");
  }

  const onClickTitleList = (e, titleList) => {
    e.preventDefault();
    console.log(titleList);
    setTitle(titleList.text);
    setShown((current) => !current);
  };

  return (
    <div className="dropdown-component">
      <div className="dropdown-box-content">
        <div className="dropdown is-active ">
          <div className="dropdown-trigger">
            <button
              onClick={() => {
                setShown((current) => !current);
              }}
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span className="dropdown-title">{title}</span>
              <span className="dropdownIcon">{icon}</span>
            </button>
          </div>
          {shown && (
            <div className="dropdown-menu">
              <ul className="dropdown-content">
                {titlesList.map((titleList) => (
                  <li key={titleList.id}>
                    <a
                      className="product-link"
                      href="#"
                      onClick={(e) => onClickTitleList(e, titleList)}
                    >
                      <div className="product-group"> {titleList.text}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
