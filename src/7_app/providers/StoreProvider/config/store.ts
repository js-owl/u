import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "2_entities/Counter";
import { userReducer } from "2_entities/User";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { useDispatch } from "react-redux";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
