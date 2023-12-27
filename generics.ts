// Identity function
const identity = <T>(value: T) => value;

const square = (x: number) => x * x;

// square(identity("Hello")); This fails

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const unbox = <T>(box: Box<T>) => box.getValue();

const box = new Box("Hello, world!");
const value = unbox(box);
console.log(value);
