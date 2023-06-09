import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { DeliveryOptions } from "../DeliveryOptions/DeliveryOptions";
export const CartProduct = ({ cartProduct, onClick, onChange }) => {
  const { title, count, productImageUrl, productPrice, deliveries } =
    cartProduct;

  const totalPrice = count * Number(productPrice).toFixed(2);
  return (
    <CardComponent>
      <div className="cart-product-component">
        <div className="columns">
        <div className="column is-one-third">
          <img src={productImageUrl} /></div>
          <div className="column">
            <h1 className="cart-product-title title is-1">{title}</h1>
            <div className="cart-product-details">
              <div className="select-quantity">
                <div>Quantity</div>
                <div className="select">
                  <select
                    className="show-quantity"
                    value={count}
                    onChange={(e) => onChange(e.target.value, cartProduct)}
                  >
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </div>
              </div>
              <button onClick={onClick}>Remove item</button>
              <button onClick={onClick}>Save for later</button>
              <div className="price-status">£{totalPrice}</div>
            </div>
            <DeliveryOptions deliveries={deliveries} />
          </div>
        </div>
      </div>
    </CardComponent>
  );
};
