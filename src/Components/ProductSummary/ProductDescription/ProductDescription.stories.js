import React from "react";
import { ProductDescription } from "./ProductDescription";
import "../../../styles.scss";

export default {
  title: "ProductSummary/ProductDescription",
  component: ProductDescription,
  argTypes: { onClick: { action: "clicked" } },

};

const Template = (args) => <ProductDescription {...args} />;

