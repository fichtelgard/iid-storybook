import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlockUI from "../../blocks/BlockUI";
import Icon from "../Icon";
import { IconType } from "../enum/IconType";

export default {
  title: "Vorlesung/Icon",
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <BlockUI fullwidth={false} contentBlock={true}>
    <br />
    <Icon {...args} />
  </BlockUI>
);

export const Default = Template.bind({});
Default.args = {
  iconType: IconType.STAR_FULL,
};
