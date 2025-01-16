import { StateSchema } from "7_app/providers/StoreProvider";

export const getLoginState = (state: StateSchema) => state?.loginForm;
