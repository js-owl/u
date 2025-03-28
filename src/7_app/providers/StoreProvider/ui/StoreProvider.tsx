import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "7_app/providers/StoreProvider/config/store";
import { StateSchema } from "7_app/providers/StoreProvider/config/StateSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );
  console.log("StoreProvider", { store });

  return <Provider store={store}>{children}</Provider>;
};
