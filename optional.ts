export class Optional<T> {
  value: T | undefined;
  assigned: boolean;

  constructor(value?: T) {
    this.value = value;
    if (value) {
      this.assigned = true;
    } else {
      this.assigned = false;
    }
  }

  hasValue() {
    return this.assigned;
  }

  getValue(): T {
    if (!this.assigned) throw Error();

    return <T>this.value;
  }

  static from<T>(value?: T): Optional<T> {
    return new Optional(value);
  }
}
