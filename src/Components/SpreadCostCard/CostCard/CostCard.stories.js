import React from "react";
import { CostCard } from "./CostCard";
import "../../../styles.scss";

export default {
  title: "Component/SpreadCostCard/CostCard",
  component: CostCard,
  // argTypes: { onClick: { action: "close" } },
};

const Template = (args) => <CostCard {...args} />;
export const All = Template.bind({});
