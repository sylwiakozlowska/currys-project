import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CardComponent } from "../CardComponent/CardComponent";
import { DeliveryList } from "../DeliveryOptions/DeliveryList";
export const SearchStock = ({ deliveries }) => {
  return (
    <div className="stock-search-component">
      <CardComponent className="primary">
        <h3 className="title size-3">Check stock in your area</h3>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              // value={text}
              type="text"
              placeholder="Enter town or postcode"
              // onChange={onChangeText}
            />
          </div>
          <div className="control">
            <button className="button">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </div>
        <DeliveryList deliveries={deliveries} />
      </CardComponent>
    </div>
  );
};
