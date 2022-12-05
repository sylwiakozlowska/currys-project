import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { CostCard } from "../../SpreadCostCard/CostCard/CostCard";
import { DeliveryComponent } from "../../DeliveryComponent/DeliveryComponent";
// import { CheckBox } from "../CheckBox/CheckBox";
import { PriceStatus } from "./PriceStatus/PriceStatus";

export const ProductPrice = ({
  deliveries,
  // selected,
  // setCompare,
  productPrice,
  savedMoney,
  guarantee,
}) => {
  let guaranteeTxt;
  if (guarantee) {
    guaranteeTxt = `${guarantee} year guarantee included`;
  } else {
    guaranteeTxt = null;
  }

  const [shownCostCard, setshownCostCard] = useState(false);

  console.log("productPrice", productPrice);

  const closeCard = useCallback(() => {
    setshownCostCard(false);
  }, []);
  return (
    <div className="product-price-component">
      <PriceStatus productPrices={productPrice} saved={savedMoney} />
      <div className="guaranteeText">{guaranteeTxt}</div>
      <div className="cost-button">
        <button onClick={() => setshownCostCard(true)}>
          Spread the cost
          <i className="glyph icon-info"></i>
        </button>
      </div>
      {shownCostCard && <CostCard onClose={closeCard} />}
      <DeliveryComponent deliveries={deliveries} />
      {/* <CheckBox state={selected} onChange={setCompare} /> */}
    </div>
  );
};
