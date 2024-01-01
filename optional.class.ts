export class Optional<T> {
  private value: T | undefined;
  private assigned: boolean;

  constructor(value?: T) {
    if (value) {
      this.value = value;
      this.assigned = true;
    } else {
      this.value = undefined;
      this.assigned = true;
    }
  }

  getValue(): T {
    if (!this.assigned) throw Error();

    return <T>this.value; // Looks like Java
  }
}
