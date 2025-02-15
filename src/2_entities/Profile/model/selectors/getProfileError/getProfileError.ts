import { StateSchema } from "7_app/providers/StoreProvider";

export const getProfileError = (state: StateSchema) => state?.profile?.error;
