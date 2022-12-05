import React from "react";
import {ProductOffers} from "./ProductOffers";
import { productSummaryComponentData } from "../ProductSummaryData";

export default {
  title: "Component/ProductSummary/ProductOffers",
  component: ProductOffers,
};

const Template = (args) => <ProductOffers {...args} />;

export const Offers = Template.bind({});
Offers.args = {
  offers: productSummaryComponentData[0].productOffers,
  max:1,
  };