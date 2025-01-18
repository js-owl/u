import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "7_app/providers/StoreProvider";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
