import React from "react";
import { CardComponent } from "./CardComponent";
import "../../styles.scss";

export default {
  title: "Component/CardComponent",
  component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

export const Card= Template.bind({});
Card.args = {
  className: "primary",
  children: (
      <div className="content">
        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
        mattis consectetur purus sit amet fermentum.
      </div>
  ),
};
export const CardInfo= Template.bind({});
CardInfo.args = {
  className: "info",
  children: (
    // <div className="card-content">
      <div className="content">
        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
        mattis consectetur purus sit amet fermentum.
      </div>
    // </div>
  ),
};