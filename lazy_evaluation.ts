class Car {} // Suppose this is expensive to build
class Bike {}

// Approach 1 -> Build a Car instance before calling chooseMyRide (this is an expensive operation)
function chooseMyRide(bike: Bike, car: Car): Bike | Car {
  if (isItRaining()) {
    return car;
  } else {
    return bike;
  }
}

function isItRaining() {
  return false;
}

chooseMyRide(new Bike(), new Car());

// Approach 2 -> Lazy evaluation with function (only build Car if needed)
function chooseMyRideLazy(bike: Bike, car: () => Car): Bike | Car {
  if (isItRaining()) {
    return car();
  } else {
    return bike;
  }
}

const makeCar = () => new Car();
chooseMyRideLazy(new Bike(), makeCar);
chooseMyRideLazy(new Bike(), () => new Car()); // Lambda

// Approach 3 -> Create a Factory method to build Cars
class CarFactory {
  makeCar() {
    return new Car();
  }
}

function chooseMyRideWithFactory(
  bike: Bike,
  carFactory: CarFactory,
): Bike | Car {
  if (isItRaining()) {
    return carFactory.makeCar();
  } else {
    return bike;
  }
}

chooseMyRideWithFactory(new Bike(), new CarFactory());
