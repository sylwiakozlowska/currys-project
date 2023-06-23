import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { Rating } from "../Rating/Rating";
import { DeliveryList } from "../DeliveryOptions/DeliveryList";
import { Button } from "../Button/Button";
import { ProductOffers } from "../ProductSummary/ProductOffers/ProductOffers";
export const SavedProduct = ({ savedItem, onRemoveFromSaved, onMoveToBasket }) => {
  const { title, rating, productOffers, productImageUrl, productPrice, deliveries } =
    savedItem;

  return (
    <CardComponent className="saved-product-card column is-one-fifth">
      <div className="saved-product-component">
        <figure className="image">
          <img src={productImageUrl} />
        </figure>
        <h2 className="saved-product-title title is-2">{title}</h2>
        <div className="product-rating">
          <Rating value={rating.value} count={rating.count}></Rating>
          <span className="product-rating-reviews">(47)</span>
        </div>
        <div className="product-offers-component">
            {productOffers?.length ? (
              <ProductOffers offers={productOffers} max={1} />
            ) : null}
          </div>
        <span className="product-price"> £{productPrice}</span>
        <CardComponent className="primary">
          <DeliveryList deliveries={deliveries} />
        </CardComponent>

        <Button className="is-outlined" onClick={()=>onMoveToBasket(savedItem)}>
          Move to basket
        </Button>
        <div className="button-group">
          <label>
            <input type="checkbox" />
            Compare
          </label>
          <button className="button-remove" onClick={()=>onRemoveFromSaved(savedItem)}>
            Remove
          </button>
        </div>
      </div>
    </CardComponent>
  );
};
