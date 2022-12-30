import React from "react";
import { PriceFilter } from "./PriceFilter";
import "../../../styles.scss";

export default {
  title: "Component/FilterComponent/PriceFilter",
  component: PriceFilter,
  argTypes: { onChange: { action: "changed" } },

  //   argTypes: { onClick: { action: 'clicked' } },
  //   argTypes: { onChange: { action: 'changed' } , onSearch: { action: 'search' }, onSelected: { action: 'selected' }},
};

const Template = (args) => <PriceFilter {...args} />;

export const All = Template.bind({});
All.args = {
title: "Price",
};


