const counter = () => {
  let count = 0;

  return () => count++;
};

const myCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

function* generatorCounter() {
  let count = 0;

  while (true) {
    yield count++;
  }
}

console.log();
console.log("Generators");
const firstGenerator = generatorCounter();
console.log(firstGenerator.next().value);
console.log(firstGenerator.next().value);

const myGeneratorCounter = generatorCounter();

console.log();
console.log("Generators");
for (const count of myGeneratorCounter) {
  if (count > 10) break;

  console.log(count);
}

// 0 1 1 2 3 5 8 13 21 34 55 89

const fibonacciClosure = () => {
  let first = 0;
  console.log(first);
  let second = 1;
  console.log(second);

  return () => {
    const previous = first;
    first = second;
    second = previous + second;

    return second;
  };
};

console.log();
console.log("Fibonacci with closure");
const closureFibonacci = fibonacciClosure();
console.log(closureFibonacci());
console.log(closureFibonacci());
console.log(closureFibonacci());
console.log(closureFibonacci());
console.log(closureFibonacci());

console.log();
console.log("Fibonacci with generators");

function* fibonacciGenerator() {
  let first = 0;
  yield first;
  let next = 1;
  yield next;

  while (true) {
    const previous = first;
    first = next;
    next = previous + next;

    yield next;
  }
}

for (const fibo of fibonacciGenerator()) {
  if (fibo > 500) break;

  console.log(fibo);
}
