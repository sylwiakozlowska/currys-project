import React from "react";
import { SpreadCostCard } from "./SpreadCostCard";

export default {
  title: "Component/SpreadCostCard",
  component: SpreadCostCard,
  argTypes: { onClick: { action: "clicked" }},

};

const Template = (args) => <SpreadCostCard {...args} />;

export const All = Template.bind({});
All.args = {
children: <div className="spread-cost-card-content">Welcome in js world !</div>
};

