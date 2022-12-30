import React from "react";
import { FilterComp } from "./FilterComp";
// import "../../styles.scss";

export default {
  title: "Component/FilterComponent/FilterComp",
  component: FilterComp,
  argTypes: { onChange: { action: "changed" } },
};

const Template = (args) => <FilterComp {...args} />;

// export const All = Template({});
// All.args = {
//   chirlren: "",
// };
