// Identity function
const identity = <T>(value: T) => value;

const square = (x: number) => x * x;

// square(identity("Hello")); This fails

export class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const unbox = <T>(box: Box<T>) => box.getValue();
