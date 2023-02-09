import React, { useState, useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
import "../../styles.scss";
import { SimpleProductList } from "./SimpleProductList/SimpleProductList";
import { DetailedProductList } from "./DetailedProductList/DetailedProductList";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { setSelectedProduct } from "../../Store/features/searchBar/searchBarSlice";
import { useSelector, useDispatch } from "react-redux";

const MIN_LENGTH = 2;
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
  const history = useHistory();
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const ref = useRef();

  const dispatch = useDispatch();

  const onSelectedProduct = (item) => {
    history.push(`/products?q=${text}`, { selected: item});
    setText("");
    // console.log("onSelectedProduct", onSelectedProduct);
  };
  // const searchText = useSelector(selectSearchTerm);
  // const dispatch = useDispatch();

  // const shown = !!text.length;
  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
    console.log("value", value);
    if (value.length > MIN_LENGTH) {
      onChange(value);
    }
  };
  const onClose = () => {
    setText("");
  };
  const onClickSearch = () => {
    onSearch(text);
    console.log("text", text);
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
      !!(simpleProducts.length || detailedProducts.length) && text.length > 2
    );
    // setShown(text.length > MIN_LENGTH);
  }, [simpleProducts, detailedProducts, text]);

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
            <SimpleProductList
              simpleProducts={simpleProducts}
              onSelected={onSelectedProduct}
            />
            <DetailedProductList
              detailedProducts={detailedProducts}
              onSelected={onSelectedProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
};
