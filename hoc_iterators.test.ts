import { describe, it, expect } from "bun:test";
import { map, filter, reduce } from "./hoc_with_iterators";
import { BinaryTreeNode } from "./binary_tree";
import { FluentIterable } from "./fluent_iterable";

describe("HOC with iterators", () => {
  it("map", () => {
    const arr = [1, 2, 3, 4, 5];
    const mapped = map(arr, (x) => x * 2);

    expect([...mapped]).toEqual([2, 4, 6, 8, 10]);
  });

  it("filter", () => {
    const arr = [1, 2, 3, 4, 5];
    const filtered = filter(arr, (x) => x % 2 === 0);

    expect([...filtered]).toEqual([2, 4]);
  });

  it("reduce", () => {
    const arr = [1, 2, 3, 4, 5];
    const reduced = reduce(arr, (acc, x) => acc + x, 0);

    expect(reduced).toEqual(15);
  });

  it("filter and reduces iterables", () => {
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.left.right = new BinaryTreeNode(3);
    root.right = new BinaryTreeNode(4);

    const result = reduce(
      filter(root, (x) => x % 2 === 0),
      (acc, x) => acc + x,
      0,
    );

    expect(result).toBe(6);
  });

  describe("with a fluent API", () => {
    it("filter and reduces iterables", () => {
      const root = new BinaryTreeNode(1);
      root.left = new BinaryTreeNode(2);
      root.left.right = new BinaryTreeNode(3);
      root.right = new BinaryTreeNode(4);

      const fIterable = new FluentIterable(root);

      const result = fIterable
        .filter((x) => x % 2 === 0)
        .reduce((acc, x) => acc + x, 0);

      expect(result).toBe(6);
    });

    it("filters and takes n elements from an iterable", () => {
      const root = new BinaryTreeNode(1);
      root.left = new BinaryTreeNode(2);
      root.left.right = new BinaryTreeNode(3);
      root.right = new BinaryTreeNode(4);

      const iter = new FluentIterable(root);

      const result = iter.filter((x) => x % 2 === 0).take(1);

      expect([...result]).toEqual([2]);
    });

    it("filters, takes and drops n elements from an iterable", () => {
      const root = new BinaryTreeNode(1);
      root.left = new BinaryTreeNode(2);
      root.left.right = new BinaryTreeNode(3);
      root.right = new BinaryTreeNode(4);

      const iter = new FluentIterable(root);

      const result = iter
        .filter((x) => x % 2 === 0)
        .take(2)
        .drop(1);

      expect([...result]).toEqual([4]);
    });
  });
});
