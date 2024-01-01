import { Optional } from "../optional";
import { describe, it, expect } from "bun:test";

describe("Tests for Optional", () => {
  it("should return true if value is assigned", () => {
    const optional = Optional.from("something");
    expect(optional.hasValue()).toBe(true);
  });

  it("should return false if value is not assigned", () => {
    const optional = Optional.from();
    expect(optional.hasValue()).toBe(false);
  });

  it("should return value if value is assigned", () => {
    const optional = Optional.from("something");
    expect(optional.getValue()).toBe("something");
  });

  it("should throw an error if value is not assigned", () => {
    const optional = Optional.from();
    expect(() => optional.getValue()).toThrow();
  });
});
