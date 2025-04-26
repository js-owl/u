import { Story } from '@storybook/react';
import { ReducersList } from '@/1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line sowl-plugin/public-api-imports
import { articleDetailsReducer } from '@/2_entities/Article/model/slice/articleDetailsSlice';

// eslint-disable-next-line sowl-plugin/public-api-imports
import { loginReducer } from '@/3_features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line sowl-plugin/public-api-imports
import { profileReducer } from '@/3_features/editableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line sowl-plugin/public-api-imports
import { addCommentFormReducer } from '@/3_features/addCommentForm/model/slices/addCommentFormSlice';
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
