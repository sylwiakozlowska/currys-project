import React, { useState } from "react";
import "../../styles.scss";
export const SearchBar = ({ simpleProducts, onChange }) => {
  const [text, setText] = useState("");
  // const searchText = useSelector(selectSearchTerm);
  // const dispatch = useDispatch();

  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
    if (value.length > 2) {
      onChange(value);
    }
    console.log("value", value);
  };
  return (
    // <SearchBar on
    <div className="search-bar-component">
      <div className="search-bar-content field has-addons">
        <div className="control-input control has-icons-right">
          <input
            className="input is-medium"
            value={text}
            type="text"
            placeholder="Looking for something?"
            onChange={onChangeText}
          />
        </div>
        <div className="control-button control">
          <button class="search-bar-button">
            <i className="glyph search-icon"></i>
          </button>
        </div>
      </div>
      <div className="dropdown"></div>
    </div>
  );
};
