import React from "react";
import { ProductSummaryWithCompare } from "./NonPureProductSummary";
import { productSummaryComponentData } from "../ProductSummary/ProductSummaryData";

// import "../../../styles.scss";

export default {
  title: "Component/ProductSummaryWithCompare",
  component: ProductSummaryWithCompare,
  argTypes: {
    onClick: { action: "cliked" },
    onCompare: { action: "compared" },
  },
};

const Template = (args) => <ProductSummaryWithCompare {...args} />;
export const ProductSummaryWithComparePruduct = Template.bind({});
ProductSummaryWithComparePruduct.args = {
    products: productSummaryComponentData,
  };
