// Ejemplos de composici'on
// Supongamos que queremos escribir funciones para:
// - Encontrar el primer n'umero menor que 0 en una lista
// - Encontrar la primera cadena de longitud 1 en un lista
//
// Una implementacion burda de esto pudiera ser:
export function findFirstNegativeNumber(numbers: Array<number>) {
  for (const n of numbers) {
    if (n < 0) return n;
  }
}

// Para la cadena de longitud 0
export function findFirstOneCharacterString(strings: Array<string>) {
  for (const s of strings) {
    if (s.length === 1) return s;
  }
}

// NOTA: Ambas funciones, en caso de no encontrar los elementos
// buscados retornaran `undefined` impl'icitamente.
// Estos ejemplos funcionan, sin embargo, qu'e sucede si
// en vez de retornar `undefined` quisi'eramos lanzar una Excepcion?
// Pues entonces tendr'iamos que cambiar ambas implementaciones.

// Notamos que ambas implementaciones hacen cosas muy parecidas, a saber:
// - Iteran sobre una lista de elementos de algun tipo
// - Chequean que se cumpla cierta condici'on para cada elemento
// - Y, se alguno la cumple, retornan ese elemento
//
// Por tanto, tenemos oportunidad para usar gen'ericos

function first<T>(elements: Array<T>, p: (el: T) => boolean) {
  for (const e of elements) {
    if (p(e)) return e;
  }
}

export function findFirstNegativeNumberWithGenerics(numbers: Array<number>) {
  return first(numbers, (n) => n < 0);
}
declare const EmptyType: unique symbol;

class Empty {
  [EmptyType]: void;
  private constructor() {}
}

function raise(message: string): Empty {
  console.error(`Error ${message} raised at ${new Date()}`);
  throw new Error(message);
}

declare const UnitType: unique symbol;

class Unit {
  [UnitType]: void;
  static readonly value: Unit = new Unit();
  private constructor() {}
}

function greet(): Unit {
  console.log("Hello, world!");
  return Unit.value;
}

greet();
