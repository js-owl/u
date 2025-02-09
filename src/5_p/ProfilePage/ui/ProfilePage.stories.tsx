import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "1_shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "7_app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
