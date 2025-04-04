import { StateSchema } from '7_app/providers/StoreProvider';

export const getProfileForm = (state: StateSchema) => state?.profile?.form;
