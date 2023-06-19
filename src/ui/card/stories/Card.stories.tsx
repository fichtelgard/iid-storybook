import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../Card";
import Collection from "../../collection/Collection";
import { CollectionStyle } from "../../collection/enum/CollectionStyle";
import BlockUI from "../../blocks/BlockUI";

export default {
  title: "Vorlesung/Card",
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <BlockUI fullwidth={false}>
      <Collection style={CollectionStyle.TRIPPLE}>
        <Card {...args} />
      </Collection>
    </BlockUI>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Eine Card",
};
