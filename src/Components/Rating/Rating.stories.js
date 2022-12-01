import React from "react";
import { Rating } from "./Rating";
import "../../styles.scss";


export default {
  title: "Component/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const RatingStar = (args) => (
  <Rating {...args}>
  </Rating>
);
RatingStar.args = {
  value: 2.5,
  count: 5,
};
