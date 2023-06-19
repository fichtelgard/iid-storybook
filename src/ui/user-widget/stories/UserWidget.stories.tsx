import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserWidget from "../UserWidget";
import BlockUI from "../../blocks/BlockUI";

export default {
  title: "Vorlesung/User Widget",
  component: UserWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UserWidget>;

const Template: ComponentStory<typeof UserWidget> = (args) => (
  <BlockUI fullwidth={false} contentBlock={true}>
    <br />
    <UserWidget {...args} />
  </BlockUI>
);

export const Gast = Template.bind({});
Gast.args = {
  loggedIn: false,
};

export const User = Template.bind({});
User.args = {
  loggedIn: true,
};
