import { Optional } from "./types";
import { Either } from "./either.class";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type InputError = "NoInput" | "Invalid";

type Result = Either<InputError, DayOfWeek>;

function getDayOfWeek(input: string): Result {
  if (input === "") return Either.makeLeft("NoInput");

  switch (input.toLowerCase()) {
    case "monday":
      return Either.makeRight("Monday");
    case "tuesday":
      return Either.makeRight("Tuesday");
    case "wednesday":
      return Either.makeRight("Wednesday");
    case "thursday":
      return Either.makeRight("Thursday");
    case "friday":
      return Either.makeRight("Friday");
    case "saturday":
      return Either.makeRight("Saturday");
    case "sunday":
      return Either.makeRight("Sunday");
    default:
      return Either.makeLeft("Invalid");
  }
}

const dayOfWeek = getDayOfWeek("broooom");
if (dayOfWeek.isRight()) {
  console.log(dayOfWeek.getRight());
} else {
  console.log(dayOfWeek.getLeft());
}

// Task DIY Optional
// In order to encode the possibility that DayOfWeek might be undefined
