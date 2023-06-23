import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../styles.scss";
import { SimpleProductList } from "./SimpleProductList/SimpleProductList";
import { DetailedProductList } from "./DetailedProductList/DetailedProductList";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const MIN_LENGTH = 2;

export const SearchBar = ({
  simpleProducts,
  detailedProducts,
  status,
  onChange,
  onSearch,
  onSelectedSimpleProduct,
  onSelectedDetailedProduct,
}) => {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const ref = useRef();

  const onSimpleProductSelected = (item) => {
    setText("");
    onSelectedSimpleProduct(item);
  };
  const onDetailedProductSelected = (item) => {
    setText("");
    onSelectedDetailedProduct(item);
  };

  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
    if (value.length > MIN_LENGTH) {
      onChange(value);
    }
  };
  const onClose = useCallback(() => {
    setText("");
  }, [text]);

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
    setShown(
      !!(simpleProducts.length || detailedProducts.length) &&
        text.length > MIN_LENGTH
    );
    // setShown(text.length > MIN_LENGTH);
  }, [text, simpleProducts, detailedProducts]);

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
            <button className="button button-close" onClick={onClose}>
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
      {shown && (
        <div className="dropdown">
          <div className="dropdown-content">
            {/* {status === "loading" && "loading..."}
            {status === "failed" && "Oops..."} */}
            <>
              <SimpleProductList
                status={status}
                simpleProducts={simpleProducts}
                onSelected={onSimpleProductSelected}
              />
              <DetailedProductList
                status={status}
                detailedProducts={detailedProducts}
                onSelected={onDetailedProductSelected}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
