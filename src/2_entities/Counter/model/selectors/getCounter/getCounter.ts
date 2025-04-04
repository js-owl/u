import { StateSchema } from '7_app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
