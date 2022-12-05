import React from "react";
import { DeliveryList } from "./DeliveryList";
import "../../styles.scss";

export default {
  title: "Component/DeliveryComponent/DeliveryList",
  component: DeliveryList,
  argTypes: {
    onChange: { action: "changed" },
    onSearch: { action: "search" },
    onSelected: { action: "selected" },
  },
};

const Template = (args) => <DeliveryList {...args} />;

export const All = Template.bind({});
All.args = {
  deliveries: [
    { id: 0, type: "free-delivery" },
    { id: 1, type: "noCollection" },
  ],
};
