import { Story } from '@storybook/react';
// eslint-disable-next-line sowl-plugin/layer-imports
import '@/7_app/s/index.scss';

export const StyleDecorator = (story: () => Story) => {
  return story();
};
