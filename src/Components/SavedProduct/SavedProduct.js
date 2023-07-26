import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { Rating } from "../Rating/Rating";
import { DeliveryList } from "../DeliveryOptions/DeliveryList";
import { Button } from "../Button/Button";
import { ProductOffers } from "../ProductSummary/ProductOffers/ProductOffers";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const SavedProduct = ({
  savedItem,
  onRemoveFromSaved,
  onMoveToBasket,
}) => {
  const {
    id,
    title,
    rating,
    productOffers,
    productImageUrl,
    productPrice,
    deliveries,
  } = savedItem;

  return (
    <CardComponent className="saved-product-card column is-one-quarter">
      <div className="saved-product-component">
        <div className="saved-product-content">
          <Link to={`/product/${id}`} className="saved-product-image-link">
            <figure className="image">
              <img src={productImageUrl} />
            </figure>
          </Link>
          <Link to={`/product/${id}`}>
            <h2 className="saved-product-title title is-2">{title}</h2>
          </Link>
          <div className="product-rating">
            <Rating value={rating.value} count={rating.count}></Rating>
            <span className="product-rating-reviews">(47)</span>
          </div>
          <div className="product-offers-component">
            {productOffers?.length ? (
              <ProductOffers offers={productOffers} max={1} />
            ) : null}
          </div>
        </div>
        <CardComponent className="primary">
          <DeliveryList deliveries={deliveries} />
        </CardComponent>
        <Button
          className="is-outlined"
          onClick={() => onMoveToBasket(savedItem)}
        >
          Move to basket
        </Button>
        <div className="button-group">
          <label>
            <input type="checkbox" />
            Compare
          </label>
          <button
            className="button-remove"
            onClick={() => onRemoveFromSaved(savedItem)}
          >
            Remove
          </button>
        </div>
      </div>
    </CardComponent>
  );
};
