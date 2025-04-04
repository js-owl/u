import { StateSchema } from '7_app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
