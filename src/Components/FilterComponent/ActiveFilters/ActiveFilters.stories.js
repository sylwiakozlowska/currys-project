import React from "react";
import { ActiveFilters } from "./ActiveFilters";
import "../../../styles.scss";
import { filterComponentData } from "../FilterComponentData";

export default {
  title: "Component/FilterComponent/ActiveFilters",
  component: ActiveFilters,
  argTypes: {
    onClear: { action: "filter cleared" },
  },
};

const Template = (args) => <ActiveFilters {...args} />;
export const All = Template.bind({});
All.args = {
  selectedFilterItems: filterComponentData.selectedFilterItems,
};
