import { describe, it, expect } from "bun:test";
import { reverse, arr_reverse } from "../generic_algorithms";
import {
  ArrayIterator,
  ArrayRandomIterator,
  elementAtRandomIterator,
} from "../extending_iterators";

describe("Generic algorithms", () => {
  it("should reverse an iterable (not efficient)", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(arr_reverse(arr)).toEqual([5, 4, 3, 2, 1]);
  });

  it("should reverse an iterable", () => {
    const arr = [1, 2, 3, 4, 5];
    const beginIterator = new ArrayIterator(arr, 0);
    const endIterator = new ArrayIterator(arr, arr.length);

    reverse(beginIterator, endIterator);

    expect(arr).toEqual([5, 4, 3, 2, 1]);
  });

  it("should return an element at a given position", () => {
    const arr = [1, 2, 3, 4, 5];
    const iterator = new ArrayRandomIterator(arr, 0);

    iterator.move(2);

    expect(iterator.get()).toBe(3);
  });

  describe("elementAt tests", () => {
    it("should return an element at a given position (elementAt)", () => {
      const arr = [1, 2, 3, 4, 5];
      const begin = new ArrayRandomIterator(arr, 0);
      const end = new ArrayRandomIterator(arr, arr.length - 1);
      const pos = 3;

      expect(elementAtRandomIterator(begin, end, pos)).toBe(4);
    });

    it("should return an element at a given position (elementAt)", () => {
      const arr = [1, 2, 3, 4, 5];
      const begin = new ArrayRandomIterator(arr, 0);
      const end = new ArrayRandomIterator(arr, arr.length - 1);
      const pos = 10;

      expect(elementAtRandomIterator(begin, end, pos)).toBe(5);
    });
  });
});
