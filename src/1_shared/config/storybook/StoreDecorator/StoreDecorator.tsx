import { Story } from "@storybook/react";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "3_features/AuthByUsername/model/slice/loginSlice";
import { StateSchema, StoreProvider } from "7_app/providers/StoreProvider";
import { profileReducer } from "2_entities/Profile";
import { ReducersList } from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
