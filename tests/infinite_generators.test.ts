import {
  generateRandomNumbers,
  square,
  take,
  drop,
} from "../infinite_generators";
import { describe, it, expect } from "bun:test";

describe("Infinite generators tests", () => {
  it("should generate random numbers", () => {
    const numbers = generateRandomNumbers();
    expect(numbers.next().value).toBeGreaterThan(0);
    expect(numbers.next().value).toBeGreaterThan(0);
    expect(numbers.next().value).toBeGreaterThan(0);
    expect(numbers.next().value).toBeGreaterThan(0);
  });

  it("should square numbers", () => {
    const numbers = square([1, 2, 3]);
    expect(numbers.next().value).toEqual(1);
    expect(numbers.next().value).toEqual(4);
    expect(numbers.next().value).toEqual(9);
  });

  it("should take 3 elements from square", () => {
    const numbers = take(square([1, 2, 3, 4, 5]), 3);
    const result = [...numbers];

    expect(result).toHaveLength(3);
  });

  it("should drop 3 elements from square", () => {
    const numbers = drop(square([1, 2, 3, 4, 5]), 3);
    const result = [...numbers];
    const [one, two] = result;

    expect(result).toHaveLength(2);
    expect(one).toEqual(16);
    expect(two).toEqual(25);
  });
});
