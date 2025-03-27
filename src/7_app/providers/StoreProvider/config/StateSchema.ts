import { CombinedState } from "redux";
import { NavigateOptions } from "react-router";
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { To } from "history";

import { CounterSchema } from "2_entities/Counter";
import { UserSchema } from "2_entities/User";
import { ProfileShema } from "2_entities/Profile";
import { ArticleDetailsSchema } from "2_entities/Article";
import { LoginSchema } from "3_features/AuthByUsername";
import { AddCommentFormSchema } from "3_features/addCommentForm";
import { ArticleDetailsCommentsSchema } from "5_p/ArticleDetailsPage";
import { ArticlesPageSchema } from "5_p/ArticlesPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async
  loginForm?: LoginSchema;
  profile?: ProfileShema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
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
