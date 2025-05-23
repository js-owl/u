import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/1_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/1_shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/1_shared/const/theme';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
  StoreDecorator({
    user: { authData: {} }
  })
];
