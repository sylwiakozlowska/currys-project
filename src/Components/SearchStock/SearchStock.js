import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { DeliveryList } from "../DeliveryComponent/DeliveryList";
const MIN_LENGTH = 0;
export const SearchStock = ({ locations, deliveries, onClick, onChange,onSelected }) => {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const ref = useRef();

  const onClickSelectedLocation = (e, id, locations) => {
    e.preventDefault();
    const location = locations.find((el) => el.id === id);
    console.log("location",location);
    onSelected(location)
    setText("")
  };
  const list = locations.map(({ id, text }) => {
    return (
      <li key={id} onClick={(e) => onClickSelectedLocation(e, id, locations)}>
        {text}
      </li>
    );
  });

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
  useEffect(() => {
    setShown(!!(locations.length && text.length > MIN_LENGTH));
    // setShown(text.length > MIN_LENGTH);
  }, [locations, text]);
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
    <div ref={ref} className="search-stock-component">
        <h3 className="title size-3">Check stock in your area</h3>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              value={text}
              type="text"
              placeholder="Enter town or postcode"
              onChange={onChangeText}
            />
          </div>
          <div className="control">
            <button className="button search-button" onClick={onClick}>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </div>
        {shown && (
          <div className="dropdown">
            <div className="dropdown-content">
              <ul>{list}</ul>
            </div>
          </div>
        )}
        <DeliveryList deliveries={deliveries} />
    </div>
  );
};
