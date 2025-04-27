import { Story } from '@storybook/react';
import { ReducersList } from '@/1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/2_entities/Article/testing';
import { loginReducer } from '@/3_features/AuthByUsername/testing';
import { profileReducer } from '@/3_features/editableProfileCard/testing';
import { addCommentFormReducer } from '@/3_features/addCommentForm/testing';
import { StateSchema, StoreProvider } from '@/7_app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailPage: articleDetailsReducer
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
  (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
