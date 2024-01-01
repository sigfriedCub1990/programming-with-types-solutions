import { Optional, Nullable } from "./types";
import { expectTypeOf, assertType } from "vitest";

describe("Types tests", () => {
  test("Optional type", () => {
    const optional: Optional<number> = undefined;
    expectTypeOf(optional).toBeUndefined();

    assertType(optional);
  });
});
