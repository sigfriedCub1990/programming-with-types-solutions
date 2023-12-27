interface IStack<T> {
  push(value: T): void;
  pop(): T;
  peek(): T;
}

export class Stack<T> implements IStack<T> {
  private stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T {
    return <T>this.stack.pop();
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }
}
