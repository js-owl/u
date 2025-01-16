import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "2_entities/Counter";
import { userReducer } from "2_entities/User";
import { loginReducer } from "3_features/AuthByUsername";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
