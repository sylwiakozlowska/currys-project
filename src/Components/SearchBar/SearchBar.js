import React, { useState, useEffect, useRef } from "react";
import "../../styles.scss";
import { SimpleProductList } from "./SimpleProductList/SimpleProductList";
import { DetailedProductList } from "./DetailedProductList/DetailedProductList";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
export const SearchBar = ({
  simpleProducts,
  detailedProducts,
  onChange,
  onSelected,
  onSearch,
}) => {
  console.log(
    onChange,
    "onChange",
    onSearch,
    "onSearch",
    onSelected,
    "onSelected"
  );
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const ref = useRef();

  // const searchText = useSelector(selectSearchTerm);
  // const dispatch = useDispatch();

  // const shown = !!text.length;
  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
    if (value.length > 2) {
      onChange(value);
    }
    console.log("value", value);
  };
  const onClose = () => {
    setText("");
  };
  const onClickSearch = () => {
    onSearch(text);
    setText("");
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

    setShown(text.length > 1);
  }, [text]);

  useEffect(() => {
    const node = ref.current;
    const onClick = (e) => {
      if (!node.contains(e.target)) {
        onClose();
      }
    };
    if (shown) {
      document.addEventListener("click", onClick, false);
    }

    return () => {
      document.removeEventListener("click", onClick, false);
    };
  }, [ref, shown, onClose]);
  return (
    <div ref={ref} className="search-bar-component">
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
        {shown && (
          <div className="control">
            <button className="button close" onClick={onClose}>
              <RxCross1 className="close-icon" />
            </button>
          </div>
        )}
        <div className="control">
          <button className="button is-primary" onClick={onClickSearch}>
            <AiOutlineSearch className="icon" />
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
            <DetailedProductList
              detailedProducts={detailedProducts}
              onSelected={onSelected}
            />
          </div>
        )}
      </div>
    </div>
  );
};
