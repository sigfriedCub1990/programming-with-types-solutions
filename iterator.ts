// type IteratorResult<T> = {
//   value: T | null;
//   done: boolean;
// };

// export interface Iterator<T> {
//   next(): IteratorResult<T>;
// }

export const print = <T>(iterator: Iterable<T>) => {
  for (const val of iterator) {
    console.log(val);
  }
};

export const contains = <T>(value: T, iterator: Iterable<T>) => {
  for (const val of iterator) {
    if (val === value) {
      return true;
    }
  }
  return false;
};
