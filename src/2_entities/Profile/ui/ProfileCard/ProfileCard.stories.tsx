import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from '1_shared/assets/tests/storybook.jpg';
import { ProfileCard } from '2_entities/Profile';
import { Country } from '2_entities/Country';
import { Currency } from '2_entities/Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Belarus,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
    avatar
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
