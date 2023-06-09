import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { Rating } from "../Rating/Rating";
import { DeliveryList } from "../DeliveryOptions/DeliveryList";
import { Button } from "../Button/Button";
export const SavedProduct = ({ savedItem, onClick }) => {
  const { title, rating, count, productImageUrl, productPrice, deliveries } =
    savedItem;

  return (
    <CardComponent>
      <div className="saved-product-component">
        <img src={productImageUrl} />
        <h1 className="saved-product-title title is-1">{title}</h1>
        <div className="product-rating">
          <Rating value={rating.value} count={rating.count}></Rating>
          <span className="product-rating-reviews">(47)</span>
        </div>
        {productPrice}
        <CardComponent className="primary">
          <DeliveryList deliveries={deliveries} />
        </CardComponent>
        
          <Button className="is-outlined" onClick={onClick}>
            Move to basket
          </Button>
          <div className="button-group">
          <label>
            <input type="checkbox" />
            Compare
          </label>
          <button className="button-remove" onClick={onClick}>
            Remove
          </button>
        </div>
      </div>
    </CardComponent>
  );
};
