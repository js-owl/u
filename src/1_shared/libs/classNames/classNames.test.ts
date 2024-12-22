import { classNames } from "./classNames";

describe("classNames", () => {
  test("first param", () => {
    expect(classNames("c1")).toBe("c1");
  });
  test("second param", () => {
    expect(classNames("c1", { c2: true, c3: false })).toBe("c1 c2");
  });
  test("second param undef", () => {
    expect(classNames("c1", { c2: true, c3: undefined }, ["c4", "c5"])).toBe(
      "c1 c4 c5 c2"
    );
  });
  test("third param", () => {
    expect(classNames("c1", { c2: true, c3: false }, ["c4", "c5"])).toBe(
      "c1 c4 c5 c2"
    );
  });
});
