import { expect, test } from "bun:test";
import {
  findFirstNegativeNumber,
  findFirstNegativeNumberWithGenerics,
} from "..";

test("results should be equal", () => {
  const numbers = [1, 10, 20, -4, 40];

  expect(
    findFirstNegativeNumber(numbers) ===
      findFirstNegativeNumberWithGenerics(numbers),
  );
});
