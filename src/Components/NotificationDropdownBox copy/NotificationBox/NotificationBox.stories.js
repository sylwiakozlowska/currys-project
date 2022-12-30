import React from "react";
import { NotificationBox } from "./NotificationBox";
import "../../../styles.scss";

export default {
  title: "Component/NotificationDropdownBox/NotificationBox",
  component: NotificationBox,
  argTypes: { onClick: { action: "clicked" } },

};

const Template = (args) => <NotificationBox {...args} />;

export const All = Template.bind({});
All.args = {
children: <div>Welcome in js world !</div>
};
