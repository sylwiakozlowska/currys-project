import React from "react";
import { CardComponent } from "../../CardComponent/CardComponent";

export const ProductOffers = ({ offers, max }) => {
  if (!offers?.length) return "Sorry. There are no offers.";
  if (!max) {
    // throw new Error('max must be > 0')
    console.warn("max must be > 0");
    max = offers.length;
  }
  //  max = max || offers.length5

  let more;
  let icon = <i className="glyph deal-icon"></i>;

  let offersList = [];
  const offersToShow = max > offers.length ? offers.length : max;

  if (offers.length > max) {
    let diff = offers.length - max;

    more = (
      <span className="info-offers">
        + {diff} more offer{diff === 1 ? "" : "s"}
      </span>
    );

    for (let i = 0; i < offersToShow; i++) {
      offersList.push(
        // <li key={i} className="offers-list">
        <a href="#" className="more-offers">
          <span className="offers">{offers[i]}</span>
          {more}
        </a>
      );
    }

    offersList = (
      <div className="offers-list">
        {icon}
        {offersList}
      </div>
    );
  }

  return (
    <CardComponent className="info">
      {offersList}
    </CardComponent>
  );
};
