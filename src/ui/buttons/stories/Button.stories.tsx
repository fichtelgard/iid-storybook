import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button";
import { ButtonStyle } from "../enum/ButtonStyle";

export default {
  title: "Vorlesung/IID-Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  style: ButtonStyle.PRIMARY,
  children: "Primary Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
  style: ButtonStyle.SECONDARY,
  children: "Secondary Button",
};
export const NochEiner = Template.bind({});
NochEiner.args = {
  style: ButtonStyle.SECONDARY,
  children: "Blub",
};
