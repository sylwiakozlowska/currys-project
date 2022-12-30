import React from "react";
import { PillBox } from "./PillBox";
import "../../../styles.scss";

export default {
  title: "Component/FilterComponent/PillBox",
  component: PillBox,
  argTypes: {
    onClick: { action: "clicked" },
    onClear: { action: "filter cleared" },
  },
};

const Template = (args) => <PillBox {...args} />;
export const All = Template.bind({});
// All.args = {

// };
