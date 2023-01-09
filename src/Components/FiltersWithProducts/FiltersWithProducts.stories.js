import React from "react";
import { FiltersWithProducts } from "./FiltersWithProducts";
import { filterComponentData } from "../FilterComponent/FilterComponentData";
import { productSummaryComponentData } from "../ProductSummary/ProductSummaryData";
import "../../styles.scss";


export default {
  title: "Component/FiltersWithProducts",
  component: FiltersWithProducts,
};

const Template = (args) => <FiltersWithProducts {...args} />;

export const All = Template.bind({});
All.args = {
  filters: filterComponentData.groups,
  activeItems: filterComponentData.selectedFilterItems,
  products: productSummaryComponentData,
};
