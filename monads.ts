import { Either } from "./either";
import { Box } from "./generics";

namespace NEither {
  export function map<TLeft, TRight, URight>(
    value: Either<TLeft, TRight>,
    fn: (item: TRight) => URight,
  ): Either<TLeft, URight> {
    if (value.isLeft()) return Either.makeLeft(value.getLeft());

    return Either.makeRight(fn(value.getRight()));
  }

  export function bind<TLeft, TRight, URight>(
    value: Either<TLeft, TRight>,
    fn: (value: TRight) => Either<TLeft, URight>,
  ): Either<TLeft, URight> {
    if (value.isLeft()) return Either.makeLeft(value.getLeft());

    return fn(value.getRight());
  }
}

// This is essentialy a Monad ~ buh ;)
namespace NBox {
  export function bind<T, U>(value: Box<T>, fn: (value: T) => Box<U>) {
    return fn(value.getValue());
  }

  export function unit<T>(value: T) {
    return new Box(value);
  }
}

type FileHandle = number;
type Cat = {
  name: string;
  age: number;
};

declare function openFile(path: string): Either<Error, FileHandle>;
declare function readFile(handle: FileHandle): Either<Error, string>;
declare function deserializeCat(serializedCat: string): Either<Error, Cat>;

function readCatFromFileWithMap(path: string): Either<Error, Cat> {
  const handle = openFile(path);

  const content: Either<Error, string> = NEither.bind(handle, readFile);

  return NEither.bind(content, deserializeCat);
}

function readCatFromFile(path: string): Either<Error, Cat> {
  const handle = openFile(path);

  if (handle.isLeft()) return Either.makeLeft(handle.getLeft());

  const content = readFile(handle.getRight());

  if (content.isLeft()) return Either.makeLeft(content.getLeft());

  return deserializeCat(content.getRight());
}
