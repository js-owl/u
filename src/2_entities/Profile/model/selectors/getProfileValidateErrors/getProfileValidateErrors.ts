import { StateSchema } from "7_app/providers/StoreProvider";

export const getProfileValidateErrors = (state: StateSchema) =>
  state?.profile?.validateError;
