import React from "react";
import { PriceStatus } from "./PriceStatus";
import { productSummaryComponentData } from "../../ProductSummaryData";

export default {
  title: "Component/ProductSummary/PriceStatus",
  component: PriceStatus,
};

const Template = (args) => <PriceStatus {...args} />;

export const PriceStatusComp = Template.bind({});
PriceStatusComp.args = {
  productPrices: productSummaryComponentData[0].productPrice,
  saved: productSummaryComponentData[0].savedMoney,
};
