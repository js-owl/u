import { StateSchema } from '@/7_app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
