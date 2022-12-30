import React from "react";
import { DropdownBox } from "./DropdownBox";
import "../../../styles.scss";

export default {
  title: "Component/DropdownBox",
  component: DropdownBox,
};

const Template = (args) => <DropdownBox {...args} />;

export const All = Template.bind({});
All.args = {
  title: "Brand",
children: <div>Welcome in js world !</div>
};
