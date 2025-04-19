import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/1_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/1_shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/2_entities/Country';
import { Currency } from '@/2_entities/Currency';
import ProfilePage from '@/5_p/ProfilePage/ui/ProfilePage';
import { Theme } from '@/7_app/providers/ThemeProvider';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Belarus,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD
      }
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Belarus,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD
      }
    }
  })
];
