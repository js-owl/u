import { CounterSchema } from "2_entities/Counter";
import { UserSchema } from "2_entities/User";
import { ProfileShema } from "2_entities/Profile";
import { LoginSchema } from "3_features/AuthByUsername";
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CombinedState } from "redux";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async
  loginForm?: LoginSchema;
  profile?: ProfileShema;
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
