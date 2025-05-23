import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/1_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/1_shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/1_shared/const/theme';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
