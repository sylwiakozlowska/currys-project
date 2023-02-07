import React from "react";
import { DeliveryComponent } from "./DeliveryComponent";
import "../../styles.scss";

export default {
  title: "Component/DeliveryComponent/Component",
  component: DeliveryComponent,
  Types: {
    onChange: { action: "changed" },
    onSearch: { action: "search" },
    onSelected: { action: "selected" },
  },
};

const Template = (args) => <DeliveryComponent {...args} />;

export const All = Template.bind({});
All.args = {
  deliveries: [
    { id: 0, type: "free-delivery" },
    { id: 1, type: "noCollection" },
  ],
};

export const noCollection = Template.bind({});
noCollection.args = {
  deliveries: [{ id: 1, type: "noCollection" }],
};
