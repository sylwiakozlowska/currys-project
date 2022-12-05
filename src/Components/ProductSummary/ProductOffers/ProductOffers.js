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
  let moreInfo = <a href="#">More info</a>;

  let offersList = [];
  const offersToShow = max > offers.length ? offers.length : max;

  for (let i = 0; i < offersToShow; i++) {
    offersList.push(
      <li key={i}>
        {icon}
        <span>{offers[i]}</span>
      </li>
    );
  }
  offersList = (
    <ul>
      {offersList}
      {moreInfo}
    </ul>
  );

  if (offers.length > max) {
    let diff = offers.length - max;

    more = (
      <a href="#">
        <span className="info-offers">
          + {diff} more offer{diff === 1 ? "" : "s"}
        </span>
      </a>
    );
  }

  return (
    <CardComponent className="info">
      <div className="offers-options">
        <div>{offersList}</div>
        {more}
      </div>
    </CardComponent>
  );
};
