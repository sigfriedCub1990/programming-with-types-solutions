class Either<TLeft, TRight> {
  readonly value: TLeft | TRight;
  readonly left: boolean;

  private constructor(value: TLeft | TRight, left: boolean) {
    this.value = value;
    this.left = left;
  }

  isLeft() {
    return this.left;
  }

  getLeft() {
    if (!this.left) throw new Error("Don't have a Left value");

    return <TLeft>this.value;
  }

  getRight() {
    if (this.left) throw new Error("Don't have a Right value");

    return <TRight>this.value;
  }

  static makeLeft<TLeft, TRight>(value: TLeft) {
    return new Either<TLeft, TRight>(value, true);
  }

  static makeRight<TLeft, TRight>(value: TRight) {
    return new Either<TLeft, TRight>(value, false);
  }
}

class Circle {}

class Triangle {}

function slot(triangle: Triangle) {
  console.log(triangle);
}

const myTriangle: Either<Triangle, Circle> = Either.makeLeft(new Triangle());
if (myTriangle.isLeft()) {
  slot(myTriangle.getLeft());
}
