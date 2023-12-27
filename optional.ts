export class Optional<T> {
  value: T | undefined;
  hasValue: boolean;

  constructor(value: T | undefined) {
    this.value = value;
    if (value) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }
  }

  getValue() {
    if (!this.hasValue) {
      throw new Error("No value");
    }

    return this.value;
  }

  static from<T>(value: T | undefined): Optional<T> {
    return new Optional(value);
  }
}

const optional = Optional.from("something");

try {
  const value = optional.getValue();
  console.log("Got: ", value);
} catch (error) {
  if (error instanceof Error) {
    console.log("Error was: ", error.message);
  }
}
