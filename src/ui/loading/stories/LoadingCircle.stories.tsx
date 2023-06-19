import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlockUI from "../../blocks/BlockUI";
import LoadingPanel from "../LoadingPanel";
import LoadingCircle from "../LoadingCircle";

export default {
  title: "Vorlesung/Loading Icon",
  component: LoadingCircle,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoadingCircle>;

const Template: ComponentStory<typeof LoadingCircle> = (args) => (
  <BlockUI fullwidth={false}>
    <br />
    <LoadingCircle {...args} />
  </BlockUI>
);

export const Default = Template.bind({});
Default.args = {};
