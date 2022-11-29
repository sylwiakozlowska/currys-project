import React, { useState, useEffect } from "react";
import "../../styles.scss";
import { SimpleProductList } from "./SimpleProductList/SimpleProductList";
export const SearchBar = ({ simpleProducts, onChange, onSelected }) => {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);

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

  useEffect(() => {
    //if (the input has text)
    //{then open the dropdown}
    //else the input is empty
    //{then dont open the dropdown}

    // if (text.length > 0) {
    //   setShown(true);
    // } else {
    //   setShown(false);
    // }

    setShown(text.length > 0);
  }, [text]);
  return (
    <div className="search-bar-component">
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          value={text}
          type="text"
          placeholder="Looking for something?"
          onChange={onChangeText}
        />
      </div>
      {/* {shown && (
        <div className="control">
          <button className="button cross" onClick={onClose}>
            <span className="icon">
              <i className="glyph cross-icon"></i>
            </span>
          </button>
        </div>
      )} */}
      <div className="control">
        <button className="button is-primary">
          <i className="glyph search-icon"></i>
        </button>
      </div>
    </div>
    <div className="dropdown">
    {shown && (
      <div className="dropdown-content">
        <SimpleProductList
          simpleProducts={simpleProducts}
          onSelected={onSelected}
        />
        {/* <DetailedProductList
          detailedProducts={detailedProducts}
          onSelected={onSelected}
        /> */}
      </div>
    )}
    </div>
  </div>
  );
};
