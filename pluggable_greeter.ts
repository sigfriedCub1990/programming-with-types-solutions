function sayGoodMorning() {
  console.log("Good Morning!");
}

function sayGoodNight() {
  console.log("Good Night!");
}

class Greeter {
  greet: () => void = sayGoodMorning;
}

const greeter = new Greeter();

greeter.greet();

greeter.greet = sayGoodNight;
greeter.greet();
