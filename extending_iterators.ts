import { LinkedListNode } from "./linked_list";

interface IReadable<T> {
  get(): T;
}

interface IWritable<T> {
  set(value: T): void;
}

interface IIncrementable<T> {
  increment(): void;
}

export interface IInputIterator<T> extends IReadable<T>, IIncrementable<T> {
  equals(other: IInputIterator<T>): boolean;
}

export interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
  equals(other: IOutputIterator<T>): boolean;
}

export interface IForwardIterator<T>
  extends IReadable<T>,
    IWritable<T>,
    IIncrementable<T> {
  equals(other: IForwardIterator<T>): boolean;
  clone(): IForwardIterator<T>;
}

export interface IBidirectionalIterator<T>
  extends IReadable<T>,
    IWritable<T>,
    IIncrementable<T> {
  equals(other: IBidirectionalIterator<T>): boolean;
  clone(): IBidirectionalIterator<T>;
  decrement(): void;
}

export interface IRandomAccessIterator<T>
  extends IReadable<T>,
    IWritable<T>,
    IIncrementable<T> {
  equals(other: IRandomAccessIterator<T>): boolean;
  clone(): IRandomAccessIterator<T>;
  decrement(): void;
  move(n: number): void;
  distance(other: IRandomAccessIterator<T>): number;
}

export class ArrayIterator<T> implements IBidirectionalIterator<T> {
  private array: Array<T>;
  private index: number;

  constructor(array: Array<T>, index: number) {
    this.array = array;
    this.index = index;
  }

  get(): T {
    return this.array[this.index];
  }

  set(value: T): void {
    this.array[this.index] = value;
  }

  increment(): void {
    this.index++;
  }

  decrement(): void {
    this.index--;
  }

  equals(other: IBidirectionalIterator<T>): boolean {
    return this.index == (<ArrayIterator<T>>other).index;
  }

  clone(): IBidirectionalIterator<T> {
    return new ArrayIterator(this.array, this.index);
  }
}

export class LinkedListInputIterator<T> implements IInputIterator<T> {
  private head: LinkedListNode<T> | undefined;

  constructor(head: LinkedListNode<T> | undefined) {
    this.head = head;
  }

  increment() {
    if (!this.head) throw Error();

    this.head = this.head.next;
  }

  equals(other: IInputIterator<T>) {
    return this.head == (<LinkedListInputIterator<T>>other).head;
  }

  get() {
    if (!this.head) throw Error();

    return this.head.value;
  }
}

export class LinkedListForwardIterator<T> implements IForwardIterator<T> {
  private head: LinkedListNode<T> | undefined;

  constructor(head: LinkedListNode<T> | undefined) {
    this.head = head;
  }

  equals(other: IForwardIterator<T>): boolean {
    return this.head == (<LinkedListForwardIterator<T>>other).head;
  }

  clone(): IForwardIterator<T> {
    return new LinkedListForwardIterator(this.head);
  }

  increment(): void {
    if (!this.head) return;

    this.head = this.head.next;
  }

  set(value: T): void {
    if (!this.head) throw Error();

    this.head.value = value;
  }

  get(): T {
    if (!this.head) throw Error();

    return this.head.value;
  }
}

export class ConsoleOutputIterator<T> implements IOutputIterator<T> {
  set(value: T): void {
    console.log(value);
  }
  increment(): void {}

  equals(_other: IOutputIterator<T>): boolean {
    return false;
  }
}

export class ArrayRandomIterator<T> implements IRandomAccessIterator<T> {
  private array: Array<T>;
  private index: number;

  constructor(array: Array<T>, index: number) {
    this.array = array;
    this.index = index;
  }

  move(n: number): void {
    this.index += n;
  }

  distance(other: IRandomAccessIterator<T>): number {
    return this.index - (<ArrayRandomIterator<T>>other).index;
  }

  get(): T {
    return this.array[this.index];
  }

  set(value: T): void {
    this.array[this.index] = value;
  }

  increment(): void {
    this.index++;
  }

  decrement(): void {
    this.index--;
  }

  equals(other: IRandomAccessIterator<T>): boolean {
    return this.index == (<ArrayRandomIterator<T>>other).index;
  }

  clone(): IRandomAccessIterator<T> {
    return new ArrayRandomIterator(this.array, this.index);
  }
}

export const elementAtRandomIterator = <T>(
  begin: IRandomAccessIterator<T>,
  end: IRandomAccessIterator<T>,
  n: number,
) => {
  begin.move(n);

  if (begin.distance(end) > 0) {
    return end.get();
  }

  return begin.get();
};

export const map = <T, U>(
  begin: IInputIterator<T>,
  end: IInputIterator<T>,
  out: IOutputIterator<U>,
  fn: (item: T) => U,
) => {
  while (!begin.equals(end)) {
    out.set(fn(begin.get()));

    begin.increment();
    out.increment();
  }
};

const head = new LinkedListNode(0);
head.next = new LinkedListNode(1);
head.next.next = new LinkedListNode(2);
