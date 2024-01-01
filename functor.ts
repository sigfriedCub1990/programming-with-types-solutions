export interface Functor<T> {
  map<U>(fn: (item: T) => U): Functor<U>;
}

export class Box<T> implements Functor<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  map<U>(fn: (item: T) => U): Functor<U> {
    return new Box(fn(this.value));
  }
}
