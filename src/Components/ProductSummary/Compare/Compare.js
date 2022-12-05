import React from "react";
import { CheckBox } from "../CheckBox/CheckBox";

export const Compare = ({ selected, setCompare }) => {
  return (
    <div className="product-compare-component">
      <CheckBox state={selected} onChange={setCompare} />
    </div>
  );
};
