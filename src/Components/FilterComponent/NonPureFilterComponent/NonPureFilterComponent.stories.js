import React from "react";
import { filterComponentData } from "../FilterComponentData";
import { NonPureFilterComponent } from "./NonPureFilterComponent";
// import "../../styles.scss";

export default {
  title: "Component/FilterComponent/NonPureFilterComponent",
  component: NonPureFilterComponent,
};

const Template = (args) => <NonPureFilterComponent {...args} />;

export const All = Template.bind({});
All.args = {
  data: filterComponentData,
}
