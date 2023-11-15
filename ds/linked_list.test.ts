import { describe, test, expect } from "bun:test";
import { LinkedList } from "./linked_list";

describe("Linked list tests", () => {
  test("should build an empty Linked List", () => {
    const ll = new LinkedList();

    expect(ll).toBeDefined();
  });

  test("should add an element to the list", () => {
    const ll = new LinkedList<number>();

    ll.append(1);

    expect(ll.getSize()).toBe(1);
  });

  test("should add several elements to the list", () => {
    const ll = new LinkedList<number>();

    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.getSize()).toBe(3);
  });

  test("should get element by position", () => {
    const ll = new LinkedList<number>();

    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.at(2)).toBe(3);
    expect(ll.at(0)).toBe(1);
  });

  test("should return an element's position by it's value", () => {
    const ll = new LinkedList<number>();

    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.find(3)).toBe(2);
  });

  test("should return list size", () => {
    const ll = new LinkedList<number>();

    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.getSize()).toBe(3);
  });
});
