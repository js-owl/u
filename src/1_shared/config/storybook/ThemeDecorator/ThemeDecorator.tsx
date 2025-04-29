import { Story } from '@storybook/react';
import { Theme } from '@/1_shared/const/theme';
// eslint-disable-next-line sowl-plugin/layer-imports
import { ThemeProvider } from '@/7_app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
