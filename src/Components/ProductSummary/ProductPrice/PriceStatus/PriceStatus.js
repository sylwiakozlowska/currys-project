import React from "react";

export const PriceStatus = ({ productPrices, saved }) => {
  console.log("productPrices", productPrices);
  productPrices = `£${productPrices}`;
  saved = `Save £${saved}`;
  
  return (
    <div className="price-status">
      <span className="new-price">{productPrices}</span>
      <span className="saved-money">{saved}</span>
    </div>
  );
};
