import { ArrayIterator } from "./extending_iterators";

export const reverse = <T>(begin: ArrayIterator<T>, end: ArrayIterator<T>) => {
  while (!begin.equals(end)) {
    end.decrement();
    if (begin.equals(end)) return;

    const tmp = begin.get();
    begin.set(end.get());
    end.set(tmp);

    begin.increment();
  }
};

export const arr_reverse = <T>(arr: Array<T>) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const tmp = arr[low];
    arr[low] = arr[high];
    arr[high] = tmp;
    low++;
    high--;
  }

  return arr;
};
