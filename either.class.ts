export class Either<TLeft, TRight> {
  private readonly value: TLeft | TRight;
  private readonly left: boolean;

  private constructor(value: TLeft | TRight, left: boolean) {
    this.value = value;
    this.left = left;
  }

  isLeft() {
    return this.left;
  }

  getLeft() {
    if (!this.isLeft()) throw new Error();

    return <TLeft>this.value;
  }

  isRight() {
    return !this.left;
  }

  getRight() {
    if (!this.isRight()) throw new Error();

    return <TRight>this.value;
  }

  static makeLeft<TLeft, TRight>(value: TLeft) {
    return new Either<TLeft, TRight>(value, true);
  }

  static makeRight<TLeft, TRight>(value: TRight) {
    return new Either<TLeft, TRight>(value, false);
  }
}
