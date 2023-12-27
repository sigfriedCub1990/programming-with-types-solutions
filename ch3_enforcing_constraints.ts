// We want a system to work with Celsius degrees

declare const celsiusType: unique symbol;

export class Celsius {
  readonly value: number;
  [celsiusType]: unknown;

  constructor(value: number) {
    if (value < -273.15)
      throw new Error("Values shouldn't be below absolute zero (-273.15)");

    this.value = value;
  }
}

// Another approach to enforce constraints would be a Factory function
export class CelsiusFactory {
  readonly value: number;
  [celsiusType]: unknown;

  private constructor(value: number) {
    this.value = value;
  }

  makeCelsius(value: number) {
    if (value < -273.15) return undefined;

    return new CelsiusFactory(value);
  }
}

// Exercise, implement a Percentage type. Values below 0 should become 0, values above 100 should become 100.
declare const percentageType: unique symbol;
export class Percentage {
  readonly value: number;
  [percentageType]: unknown;

  private constructor(value: number) {
    this.value = value;
  }

  static makePercentage(value: number) {
    if (value < 0) return new Percentage(0);
    if (value > 100) return new Percentage(100);
    return new Percentage(value);
  }
}
