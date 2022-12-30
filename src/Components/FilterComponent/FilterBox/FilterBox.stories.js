import React from "react";
import { FilterBox } from "./FilterBox";
import { filterComponentData } from "../FilterComponentData";
import "../../../styles.scss";

export default {
  title: "Component/FilterComponent/FilterBox",
  component: FilterBox,
  argTypes: {
    onChange: { action: "changed" },
  },
};

const Template = (args) => <FilterBox {...args} />;

export const All = Template.bind({});
All.args = filterComponentData.groups[1]

