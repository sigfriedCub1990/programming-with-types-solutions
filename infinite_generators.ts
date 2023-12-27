export function* generateRandomNumbers() {
  while (true) {
    yield Math.random();
  }
}

export function* square(iterable: Iterable<number>) {
  for (const value of iterable) {
    yield value ** 2;
  }
}

export function* take(iter: Iterable<number>, count: number) {
  let n = count;

  for (const value of iter) {
    if (n <= 0) {
      break;
    }

    yield value;
    n--;
  }
}

export function* drop(iter: Iterable<number>, count: number) {
  let n = 1;

  for (const value of iter) {
    if (n > count) {
      yield value;
    }
    n++;
  }
}

console.log("Take five elements from square generator.");
export const values = take(square(generateRandomNumbers()), 5);
for (const value of values) {
  console.log(value);
}

console.log("Take sixth, seventh, eighth, ninth and tenth elements.");
export const values2 = take(
  drop(square([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6),
  4,
);
for (const value of values2) {
  console.log(value);
}
