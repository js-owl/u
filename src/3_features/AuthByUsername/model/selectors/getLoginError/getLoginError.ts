import { StateSchema } from '7_app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
