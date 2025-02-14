import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "2_entities/Counter";
import { userReducer } from "2_entities/User";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { $api } from "1_shared/api/api";
import { To } from "history";
import { NavigateOptions } from "react-router";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { api: $api, navigate } },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
