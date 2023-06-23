import React from "react";

export const PriceStatus = ({ productPrices, saved }) => {
  productPrices = `£${productPrices}`;
  saved = `Save £${saved}`;
  
  return (
    <div className="price-status">
      <span className="new-price">{productPrices}</span>
      <span className="saved-money">{saved}</span>
    </div>
  );
};
