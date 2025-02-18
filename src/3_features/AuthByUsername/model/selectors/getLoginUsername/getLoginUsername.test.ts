import { getLoginUsername } from "./getLoginUsername";
import { StateSchema } from "7_app/providers/StoreProvider";

describe("getLoginIsLoading", () => {
  test("toEqual 123", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "123",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("123");
  });
  test("toEqual empty string", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
