import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/1_shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/1_shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/7_app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/1_shared/config/storybook/RouterDecorator/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
