import { CombinedState } from "redux";
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { CounterSchema } from "2_entities/Counter";
import { UserSchema } from "2_entities/User";
import { ProfileShema } from "2_entities/Profile";
import { ArticleDetailsSchema } from "2_entities/Article";
import { LoginSchema } from "3_features/AuthByUsername";
import { AddCommentFormSchema } from "3_features/addCommentForm";
import { UISchema } from "3_features/UI";
import { ArticlesPageSchema } from "5_p/ArticlesPage";
import { ArticleDetailsPageSchema } from "5_p/ArticleDetailsPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // async
  loginForm?: LoginSchema;
  profile?: ProfileShema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
