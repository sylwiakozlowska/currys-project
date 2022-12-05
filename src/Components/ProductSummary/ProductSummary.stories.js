import React from "react";
import { ProductSummary } from "./ProductSummary";
import { productSummaryComponentData } from "../ProductSummary/ProductSummaryData";

import "../../styles.scss";

export default {
  title: "Component/ProductSummary",
  component: ProductSummary,
  argTypes: {
  //   onClick: { action: "clicked" },
  //   setShown: { action: "show" },
    // onChange: { action: "changed" },
    onCompare: { action: "compare" },
  },
};

const Template = (args) => <ProductSummary {...args} />;

export const All = Template.bind({});
All.args = {
  product: productSummaryComponentData[0],
};
