import { Pair } from "./pair";
import { expect, describe, it } from "bun:test";

describe("Pair tests", () => {
  it("should build an instance of a Pair", () => {
    const p = new Pair(1, 2);
    expect(p).toBeInstanceOf(Pair);
  });

  it("should return its members", () => {
    const p = new Pair(1, 2);
    expect(p.getFirst()).toBe(1);
    expect(p.getSecond()).toBe(2);
  });
});
