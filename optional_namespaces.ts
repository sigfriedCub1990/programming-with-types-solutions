import { Box } from "./generics";
import { Optional } from "./optional";

namespace NOptional {
  export function map<T, U>(
    optional: Optional<T>,
    fn: (item: T) => U,
  ): Optional<U> {
    if (optional.hasValue()) {
      return new Optional<U>(fn(optional.getValue()));
    }
    return new Optional<U>();
  }
}

export namespace SumType {
  export function map<T, U>(
    optional: T | undefined,
    fn: (item: T) => U,
  ): U | undefined {
    if (optional === undefined) {
      return undefined;
    }
    return fn(optional);
  }
}

namespace NBox {
  export function map<T, U>(box: Box<T>, fn: (item: T) => U): Box<U> {
    return new Box(fn(box.getValue()));
  }
}

namespace Function {
  export function map<T, U>(
    f: (arg1: T, arg2: T) => T,
    func: (value: T) => U,
  ): (arg1: T, arg2: T) => U {
    return (arg1: T, arg2: T) => func(f(arg1, arg2));
  }
}

function add(x: number, y: number) {
  return x + y;
}

function stringify(x: number) {
  return x.toString();
}

console.log(Function.map(add, stringify)(1, 2));

interface IReader<T> {
  read(): T;
}

class ReaderFunctor<T, U> implements IReader<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  read(): T {
    return this.value;
  }

  map(fn: (item: T) => U): IReader<U> {
    return new ReaderFunctor(fn(this.value));
  }
}

const readerFunctor = new ReaderFunctor(1);
console.log(typeof readerFunctor.map(stringify).read());
