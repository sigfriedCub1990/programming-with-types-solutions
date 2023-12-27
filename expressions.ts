interface Expression {
  eval(): number;
}

abstract class BinaryExpression implements Expression {
  readonly a: number;
  readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  abstract eval(): number;
}

class SumExpression extends BinaryExpression {
  eval(): number {
    return this.a + this.b;
  }
}

const s = new SumExpression(4, 5);
console.log(s.eval());

abstract class UnaryExpression implements Expression {
  readonly a: number;

  constructor(a: number) {
    this.a = a;
  }

  abstract eval(): number;
}

class UnaryMinusExpression extends UnaryExpression {
  eval(): number {
    return -this.a;
  }
}

const u = new UnaryMinusExpression(5);
console.log(u.eval());
