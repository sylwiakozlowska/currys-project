import React from "react";
import { ComparePanel } from "./ComparePanel";
import { productSummaryComponentData } from "../ProductSummaryData";


export default {
  title: "Component/ProductSummary/ComparePanel",
  component: ComparePanel,
  argTypes: {
    onClear: { action: "cleared" },
  },
};

const Template = (args) => <ComparePanel {...args} />;
export const ComparePanelProducts = Template.bind({});
ComparePanelProducts.args = {
    products: productSummaryComponentData,
  };