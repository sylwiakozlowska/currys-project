import React from "react";
import "../../styles.scss";
export const SearchBar = () => {
  return (
    <div className="search-bar-component">
      <div className="search-bar-content field has-addons">
        <div className="control-input control has-icons-right">
          <input
            className="input is-large"
            type="text"
            placeholder="Looking for something?"
          />
        </div>
        <div className="control-button control">
          <button class="search-bar-button">
            <i className="glyph search-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
