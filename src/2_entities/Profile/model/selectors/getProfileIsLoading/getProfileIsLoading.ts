import { StateSchema } from '7_app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
