/* eslint-disable implicit-arrow-linebreak */
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@/7_app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
