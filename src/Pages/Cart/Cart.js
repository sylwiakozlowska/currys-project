import React, { useState, useEffect } from "react";
import "../../styles.scss";
import classNames from "classnames";
import { batch, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectCartProducts,
  removeFromBasket,
  setProductCount,
  selectItemCount,
} from "../../Store/features/cart/cartProductSlice";
import {
  toggleSaved,
  selectSavedProducts,
  removeFromSaved,
} from "../../Store/features/saved/savedProductSlice";
import { selectMenu } from "../../Store/features/menu/menuSlice";
import { CartProduct } from "../../Components/CartProduct/CartProduct";
import { Checkout } from "../../Components/Checkout/Checkout";
import { CardComponent } from "../../Components/CardComponent/CardComponent";
// import { ProductImage } from "../../Components/ProductSummary/ProductImage/ProductImage";

export const Cart = () => {
  const products = useSelector(selectCartProducts);
  const dispatch = useDispatch();
  const { listOptions } = useSelector(selectMenu);

  //add the count to total when the quantity is changed
  const itemsCount = useSelector(selectItemCount);
  const basketItems = `(${itemsCount} ${itemsCount === 1 ? "item" : "items"})`;

  const savedProducts = useSelector(selectSavedProducts);
  console.log("savedProducts cartProduct", savedProducts);

  const onChangeQuantity = (count, { id }) => {
    dispatch(setProductCount({ count, id }));
  };
  const onRemoveItem = (cartProduct) => {
    console.log(cartProduct);
    dispatch(removeFromBasket(cartProduct));
  };

  const listOptionsList = listOptions.map(({ id, text, menuIcon }) => {
    const menuIcons = classNames("glyph", menuIcon);
    return (
      <li className="options" key={id}>
        <a href="#">
          <i className={menuIcons}></i>
          <p>{text}</p>
        </a>
      </li>
    );
  });

  const onChangeSaved = (cartProduct) => {
    const savedProduct = savedProducts.find(({ id }) => id === cartProduct.id);
    console.log("saved", cartProduct);
    batch(() => {
      dispatch(toggleSaved(cartProduct));
      dispatch(removeFromSaved(savedProduct));
    });
  };
  const cartProducts = products.map((cartProduct) => {
    const isSaved = !!savedProducts.find(({ id }) => id === cartProduct.id);

    return (
      <CartProduct
        isSaved={isSaved}
        cartProduct={cartProduct}
        onRemoveItem={onRemoveItem}
        onChangeQuantity={onChangeQuantity}
        onChangeSaved={onChangeSaved}
      />
    );
  });
  if (itemsCount === 0) {
    return (
      <div className="cart-component-empty">
        <h1 className="title is-1">Your basket is empty</h1>
        <p>When you add items they'll appear here.</p>
        <CardComponent>
          <h1 className="title is-1">Continue shopping</h1>
          <ul className="list-options-list">{listOptionsList}</ul>
        </CardComponent>
        <p>
          *Prices are subject to change. On rare occasions you may find that
          items automatically removed from your basket have changed price when
          you add them back.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-component">
      <h1 className="product-title title is-1">Your basket {basketItems}</h1>
      <div className="cart-component-content columns">
        <div className="cart-products column is-two-thirds">{cartProducts}</div>
        <div className="checkout column">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
