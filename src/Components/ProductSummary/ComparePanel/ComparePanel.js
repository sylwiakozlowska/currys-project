import React from "react";
import {PillBox} from "../../FilterComponent/PillBox/PillBox";

export const ComparePanel = ({products, onClear}) => {
  const productList = products.map(product => {
    return <PillBox id={product.id} onClear={(id) => onClear(product)}>{product.title}</PillBox>
  })
  return (
    <div>
              {productList}
    </div>
  );
};
