// type Location = {
//   lat: number;
//   lng: number;
// };

// type Car = {
//   model: string;
//   driver: string;
// };

// declare function getLocation(): Promise<Location>;
// declare function hailRideshare(location: Location): Promise<Car>;

// let car = getLocation().then(hailRideshare);

function divisors(n: number) {
  const divisors = [];

  const middle = n / 2;
  for (let i = 2; i <= middle; i++) {
    if (n % i === 0) divisors.push(i);
  }

  return divisors;
}

function allDivisors(ns: number[]) {
  return bind(ns, divisors);
}

// Monad for a list
function bind<T, U>(values: T[], fn: (value: T) => U[]): U[] {
  let results: U[] = [];

  for (const n of values) {
    results = results.concat(fn(n));
  }

  return results;
}

console.log(allDivisors([2, 6, 10, 90]));

namespace NLazy {
  // unit :: T -> Lazy<T>
  export function unit<T>(value: T): Lazy<T> {
    // Wraps a type T into a Lazy type
  }
  // bind :: T -> (T -> U) -> U
  export function bind() {}
  // map ::
  export function map() {}
}

type Lazy<T> = () => T;
