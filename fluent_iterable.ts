export class FluentIterable<T> {
  private iter: Iterable<T>;

  constructor(iter: Iterable<T>) {
    this.iter = iter;
  }

  map<U>(fn: (item: T) => U) {
    return new FluentIterable(this.mapImpl(fn));
  }

  *mapImpl<U>(fn: (item: T) => U): Iterable<U> {
    for (const val of this.iter) {
      yield fn(val);
    }
  }

  filter(pred: (item: T) => boolean) {
    return new FluentIterable(this.filterImpl(pred));
  }

  *filterImpl(pred: (item: T) => boolean): Iterable<T> {
    for (const val of this.iter) {
      if (pred(val)) {
        yield val;
      }
    }
  }

  reduce<U>(callbackFn: (acc: U, current: T) => U, initialValue: U): U {
    let acc = initialValue;

    for (const item of this.iter) {
      acc = callbackFn(acc, item);
    }

    return acc;
  }

  take(n: number) {
    return new FluentIterable(this.takeImpl(n));
  }

  *takeImpl(count: number) {
    let n = count;

    for (const value of this.iter) {
      if (n <= 0) {
        break;
      }
      yield value;
      n--;
    }
  }

  drop(n: number) {
    return new FluentIterable(this.dropImpl(n));
  }

  *dropImpl(count: number) {
    let n = 1;

    for (const value of this.iter) {
      if (n > count) {
        n++;
        yield value;
      } else {
        n++;
        continue;
      }
    }
  }

  [Symbol.iterator]() {
    return this.iter[Symbol.iterator]();
  }
}
