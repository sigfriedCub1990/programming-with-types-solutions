// Collections
const numbers = [1, 2, 3, 4, 5];
const strings = ["salvador", "eva", "ruben"];

// <!-- Map -->
const map = <T, U>(items: Array<T>, fn: (item: T) => U): Array<U> => {
  const results = [];

  for (const item of items) {
    results.push(fn(item));
  }

  return results;
};

console.log("Map");
console.log(map(numbers, (n) => n * 2));
console.log(map(strings, (s) => s.length));
console.log();

// <!-- Filter -->
const filter = <T>(items: Array<T>, fn: (item: T) => boolean): Array<T> => {
  const results = [];

  for (const item of items) {
    if (fn(item)) {
      results.push(item);
    }
  }

  return results;
};

console.log("Filter");
console.log(filter(numbers, (n) => n % 2 === 0));
console.log(filter(strings, (s) => s.length > 5));
console.log();

const reduce = <T, U>(
  items: Array<T>,
  callbackFn: (acc: U, current: T) => U,
  initialValue: U,
) => {
  let acc = initialValue;

  for (const item of items) {
    acc = callbackFn(acc, item);
  }

  return acc;
};

console.log("Reduce");
console.log(reduce(numbers, (acc, n) => acc * n, 1));
console.log(reduce(strings, (acc, s) => acc + s, ""));
console.log();

console.log("Exercises");

console.log("first fn implementation");
const first = <T>(
  items: Array<T>,
  predicate: (e: T) => boolean,
): T | undefined => {
  let result;

  for (const item of items) {
    if (predicate(item)) {
      result = item;
      break;
    }
  }

  return result;
};

const greaterThanTwo = first(numbers, (n) => n > 2);
console.log(greaterThanTwo);

console.log("all fn implementation");
const all = <T>(items: Array<T>, pred: (e: T) => boolean) => {
  for (const item of items) {
    if (!pred(item)) return false;
  }

  return true;
};

const greaterThanZero = all(numbers, (e) => e > 0);
console.log(greaterThanZero);
