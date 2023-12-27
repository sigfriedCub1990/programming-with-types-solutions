class Car {}

interface WashingStrategy {
  wash: (car: Car) => void;
}

class PremiumWashingStrategy implements WashingStrategy {
  wash(car: Car): void {
    console.log("Premium service for Car");
  }
}

class RegularWashingStrategy implements WashingStrategy {
  wash(car: Car): void {
    console.log("Regular service for Car");
  }
}

class CarWash {
  service(car: Car, premium: boolean = false) {
    let washingStrategy: WashingStrategy;

    if (premium) {
      washingStrategy = new PremiumWashingStrategy();
    } else {
      washingStrategy = new RegularWashingStrategy();
    }

    washingStrategy.wash(car);
  }
}

const carWash = new CarWash();
const myCar = new Car();

carWash.service(myCar, true);
