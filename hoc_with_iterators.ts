export function* map<T, U>(
  iterable: Iterable<T>,
  fn: (item: T) => U,
): Iterable<U> {
  for (const val of iterable) {
    yield fn(val);
  }
}

export function* filter<T>(
  iterable: Iterable<T>,
  pred: (item: T) => boolean,
): Iterable<T> {
  for (const val of iterable) {
    if (pred(val)) {
      yield val;
    }
  }
}

export function reduce<T, U>(
  iterable: Iterable<T>,
  callbackFn: (acc: U, current: T) => U,
  initialValue: U,
): U {
  let acc = initialValue;

  for (const item of iterable) {
    acc = callbackFn(acc, item);
  }

  return acc;
}
