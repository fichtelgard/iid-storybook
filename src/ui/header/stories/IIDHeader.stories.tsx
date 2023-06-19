import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IIDHeader from "../IIDHeader";

export default {
  title: "Vorlesung/IID Header",
  component: IIDHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IIDHeader>;

const Template: ComponentStory<typeof IIDHeader> = (args) => (
  <IIDHeader {...args} />
);

export const sample = Template.bind({});
sample.args = {
  title: "Hallo Welt",
};

export const sample_2 = Template.bind({});
sample_2.args = {
  title: "Hallo Mond",
};
