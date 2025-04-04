import '7_app/s/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => {
  return story();
};
