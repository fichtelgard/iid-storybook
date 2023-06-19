import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlockUI from "../../blocks/BlockUI";
import LoadingPanel from "../LoadingPanel";

export default {
  title: "Vorlesung/Loading Panel",
  component: LoadingPanel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoadingPanel>;

const Template: ComponentStory<typeof LoadingPanel> = (args) => (
  <BlockUI fullwidth={false}>
    <LoadingPanel {...args} />
  </BlockUI>
);

export const Default = Template.bind({});
Default.args = {};
