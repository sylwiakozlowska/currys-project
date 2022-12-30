import React from "react";
import { filterComponentData } from "../FilterComponent/FilterComponentData";
import { FilterComponent } from "./FilterComponent";
import "../../styles.scss";

export default {
  title: "Component/FilterComponent/Component",
  component: FilterComponent,
  argTypes: {
    onClick: { action: "clicked" },
    onClear: { action: "filter cleared" },
    onChange: {action: "filter changed"}
  },
};

const Template = (args) => <FilterComponent {...args} />;

export const All = Template.bind({});
All.args = {
  selectedFilterItems: filterComponentData.selectedFilterItems,
  filterGroups: filterComponentData.groups,
};
