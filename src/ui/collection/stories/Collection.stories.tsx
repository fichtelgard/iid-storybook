import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Collection from "../Collection";
import Card from "../../card/Card";
import BlockUI from "../../blocks/BlockUI";

export default {
  title: "Vorlesung/Card Collection",
  component: Collection,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Collection>;

const Template: ComponentStory<typeof Collection> = (args) => (
  <BlockUI fullwidth={false}>
    <Collection {...args}>
      <Card title={"Card 1"} />
      <Card title={"Card 2"} />
      <Card title={"Card 3"} />
      <Card title={"Card 4"} />
      <Card title={"Card 5"} />
      <Card title={"Card 6"} />
    </Collection>
  </BlockUI>
);

export const Default = Template.bind({});
Default.args = {};
