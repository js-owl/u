/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "1_shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "7_app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex ut  deleniti perspiciatis iure cumque quam quis suscipit similique fuga.",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex ut  deleniti perspiciatis iure cumque quam quis suscipit similique fuga.",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
