import React from "react";
import { NotificationDropdownBox } from "./NotificationDropdownBox";
import "../../styles.scss";

export default {
  title: "Component/NotificationDropdownBox",
  component: NotificationDropdownBox,
  argTypes: { onClick: { action: "clicked" }},

};

const Template = (args) => <NotificationDropdownBox {...args} />;

export const All = Template.bind({});
All.args = {
children: <div>Welcome in js world !</div>
};

