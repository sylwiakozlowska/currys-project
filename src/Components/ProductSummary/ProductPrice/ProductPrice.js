import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import { CostCard } from "../../SpreadCostCard/CostCard/CostCard";
import { DeliveryOptions } from "../../DeliveryOptions/DeliveryOptions";
// import { CheckBox } from "../CheckBox/CheckBox";
import { PriceStatus } from "./PriceStatus/PriceStatus";
import { StockMessage } from "./StockMessage/StockMessage";
import { CardComponent } from "../../CardComponent/CardComponent";
import { ExtraInfo } from "../../ProductSummary/ProductPrice/ExtraInfo/ExtraInfo";
export const ProductPrice = ({
  deliveries,
  // selected,
  // setCompare,
  productPrice,
  savedMoney,
  extraInfo,
  stock,
}) => {
  const [shownCostCard, setshownCostCard] = useState(false);

  console.log("productPrice", productPrice);

  const closeCard = useCallback(() => {
    setshownCostCard(false);
  }, []);
  return (
    <div className="product-price-component">
      <PriceStatus productPrices={productPrice} saved={savedMoney} />
      <div className="cost-button">
        <button onClick={() => setshownCostCard(true)}>
          Spread the cost
          <i className="glyph info-icon"></i>
        </button>
      </div>
      <div className="extra-info-component">
        <ExtraInfo extraInfo={extraInfo} />
      </div>
      {shownCostCard && <CostCard onClose={closeCard} />}
      <CardComponent className="stock-info">
        <StockMessage stock={stock} />
      </CardComponent>

      <DeliveryOptions className="primary" deliveries={deliveries} />
      {/* <CheckBox state={selected} onChange={setCompare} /> */}
    </div>
  );
};
