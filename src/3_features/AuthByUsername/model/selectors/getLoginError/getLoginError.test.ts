import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginError } from "./getLoginError";
import { StateSchema } from "7_app/providers/StoreProvider";

describe("getLoginError", () => {
  test("toEqual error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });
  test("toEqual undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
