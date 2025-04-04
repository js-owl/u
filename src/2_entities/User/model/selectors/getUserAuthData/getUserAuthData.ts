import { StateSchema } from '7_app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
