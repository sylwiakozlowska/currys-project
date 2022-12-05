import React from "react";
import { CheckBox } from "./CheckBox";

// import "../../../styles.scss";

export default {
  title: "Component/ProductSummary/CheckBox",
  component: CheckBox,
  argTypes: {
    onChange: { action: "changed" },
  },
};

const Template = (args) => <CheckBox {...args} />;


