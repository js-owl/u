import { StateSchema } from "7_app/providers/StoreProvider";

export const getProfileData = (state: StateSchema) => state?.profile?.data;
