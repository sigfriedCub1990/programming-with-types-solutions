type Nullable<T> = T | null;

function acceptsString(s: string) {
  return s.length;
}

function acceptsArray(a: string[]) {
  return a.length;
}

type ArrayOfStringOrNull = Nullable<string[]>;

const a: string = null;
acceptsString(a);

const b: ArrayOfStringOrNull = null;
acceptsArray(b);

abstract class ALogger {
  abstract log(line: string): void;
}
