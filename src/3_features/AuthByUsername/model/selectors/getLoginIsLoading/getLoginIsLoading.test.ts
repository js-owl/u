import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "7_app/providers/StoreProvider";

describe("getLoginIsLoading", () => {
  test("toEqual true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test("toEqual false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
