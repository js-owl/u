import { StateSchema } from '7_app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
