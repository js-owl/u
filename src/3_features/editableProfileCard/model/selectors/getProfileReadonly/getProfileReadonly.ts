import { StateSchema } from '@/7_app/providers/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
