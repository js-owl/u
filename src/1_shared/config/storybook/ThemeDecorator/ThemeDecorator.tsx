/* eslint-disable implicit-arrow-linebreak */
import { Theme, ThemeProvider } from '@/7_app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
