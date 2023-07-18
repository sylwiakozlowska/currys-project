import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { DeliveryList } from "../DeliveryOptions/DeliveryList";

export const CartProduct = ({
  isSaved,
  cartProduct,
  onRemoveItem,
  onChangeQuantity,
  onChangeSaved,
}) => {
  const { title, count, productImageUrl, productPrice, deliveries } =
    cartProduct;
  const totalPrice = count * Number(productPrice).toFixed(2);

  return (
    <div className="cart-product-component">
      <CardComponent>
        <div className="columns">
          <div className="column is-one-third">
            <img src={productImageUrl} />
          </div>
          <div className="column">
            <h1 className="cart-product-title title is-1">
              <a href="">{title}</a>
            </h1>
            <div className="cart-product-details">
              <div className="select-quantity">
                <div>Quantity</div>
                <div className="select">
                  <select
                    className="show-quantity"
                    value={count}
                    onChange={(e) =>
                      onChangeQuantity(e.target.value, cartProduct)
                    }
                  >
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </div>
              </div>
              <button onClick={() => onRemoveItem(cartProduct)}>
                Remove item
              </button>

              <button onClick={() => onChangeSaved(cartProduct)}>
                {isSaved ? "Saved" : "Save for later"}
              </button>
              <div className="price-status">£{totalPrice}</div>
            </div>
            <div className="delivery-preferences">
              <CardComponent>
                <p>
                  You can choose your delivery or collection preferences at
                  checkout
                </p>
                <DeliveryList deliveries={deliveries} />
              </CardComponent>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};
