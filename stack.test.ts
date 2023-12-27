import { it, describe, expect } from "bun:test";
import { Stack } from "./stack";

describe("Stack tests", () => {
  it("should build an instance of a Stack", () => {
    const s = new Stack<number>();
    expect(s).toBeInstanceOf(Stack);
  });
  it("should push an item to the stack", () => {
    const s = new Stack<number>();
    s.push(1);
    expect(s.peek()).toBe(1);
  });
  it("should pop an item from the stack", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    expect(s.pop()).toBe(2);
  });
});
