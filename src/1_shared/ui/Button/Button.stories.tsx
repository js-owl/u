/* eslint-disable react/jsx-props-no-spreading */
// import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { ThemeDecorator } from "1_shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import { Theme } from "7_app/providers/ThemeProvider";
import { Button, ButtonTheme } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

// export const Outline = Template.bind({});
// Outline.args = {
//   children: "Text",
//   theme: ButtonTheme.OUTLINE,
// };

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//   children: "Text",
//   theme: ThemeButton.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
