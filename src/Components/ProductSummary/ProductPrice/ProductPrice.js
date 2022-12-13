import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import { CostCard } from "../../SpreadCostCard/CostCard/CostCard";
import { DeliveryComponent } from "../../DeliveryComponent/DeliveryComponent";
// import { CheckBox } from "../CheckBox/CheckBox";
import { PriceStatus } from "./PriceStatus/PriceStatus";
import { StockMessage } from "./StockMessage/StockMessage";
import { CardComponent } from "../../CardComponent/CardComponent";

export const ProductPrice = ({
  deliveries,
  // selected,
  // setCompare,
  productPrice,
  savedMoney,
  guarantee,
  stock,
}) => {
  console.log("stock1", stock);
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
          <i className="glyph info-icon"></i>
        </button>
      </div>
      {shownCostCard && <CostCard onClose={closeCard} />}
      <CardComponent className="stock-info">
        <StockMessage stock={stock} />
      </CardComponent>

      <DeliveryComponent deliveries={deliveries} />
      {/* <CheckBox state={selected} onChange={setCompare} /> */}
    </div>
  );
};
