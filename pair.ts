export class Pair<T, U> {
  constructor(
    private first: T,
    private second: U,
  ) {}

  getFirst() {
    return this.first;
  }

  getSecond() {
    return this.second;
  }
}
