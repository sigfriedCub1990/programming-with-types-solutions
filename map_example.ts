import { SumType } from "./optional_namespaces";

function readNumber(): number | undefined {
  /*
   * Omitted, but suppose this method
   * will read from a file or the network
   * so it can fail.
   * Hence the `undefined`
   */

  return undefined; // Let's stub this
}

/*
 * Notice that with imperative_process we're responsible for
 * error handling.
 * How can we do better? Ahhh, let's map over the result of `readNumber`.
 */
function imperative_process() {
  const value: number | undefined = readNumber();
  if (value === undefined) {
    return undefined;
  }

  return stringify(square(value));
}

function process() {
  const value: number | undefined = readNumber();

  /*
   * As we can see, code can be read in a linear fashion, and
   * we don't need to handle errors, they're handled by the
   * `map` function!.
   */

  return SumType.map(value, (value) => stringify(square(value)));
}

const square = (x: number) => x ** 2;
const stringify = (x: number) => x.toString();

console.log(imperative_process());
console.log(process());
