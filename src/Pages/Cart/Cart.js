import React, { useState, useEffect } from "react";
import "../../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  selectCartProduct,
  selectStatus,
} from "../../Store/features/cart/cartProductSlice";
import {
  removeFromBasket,
  setProductCount,
  selectItemCount,
} from "../../Store/features/cart/cartProductSlice";
import { CartProduct } from "../../Components/CartProduct/CartProduct";
import { Checkout } from "../../Components/Checkout/Checkout";
// import { ProductImage } from "../../Components/ProductSummary/ProductImage/ProductImage";

export const Cart = () => {
  const products = useSelector(selectCartProduct);
  console.log("products", products);
  const dispatch = useDispatch();

  //add the count to total when the quantity is changed
  const itemsCount = useSelector(selectItemCount);
  const basketItems = `(${itemsCount} ${itemsCount === 1 ? "item" : "items"})`;

  const onChangeQuantity = (count, { id }) => {
    dispatch(setProductCount({ count, id }));
  };
  const onClickRemoveItem = (cartProduct) => {
    console.log(cartProduct);
    dispatch(removeFromBasket(cartProduct));
  };

  const cartProducts = products.map((cartProduct) => {
    return (
      <CartProduct
        cartProduct={cartProduct}
        onClick={onClickRemoveItem}
        onChange={onChangeQuantity}
      />
    );
  });

  return (
    <div className="cart-component">
      <h1 className="product-title title is-1">Your basket {basketItems}</h1>
      <div className="cart-component-content columns">
        <div className="cart-products column is-two-thirds"> {cartProducts}</div>
        <div className="checkout column">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
