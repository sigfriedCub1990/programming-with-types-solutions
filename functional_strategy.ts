class Car {}

type WashStrategy = (car: Car) => void;

function standardWash(car: Car) {
  console.log("Standard service for Car", car);
}
function premiumWash(car: Car) {
  console.log("Premium service for Car", car);
}

class CarWash {
  service(car: Car, premium: boolean = false) {
    let washStrategy: WashStrategy;

    if (premium) {
      washStrategy = premiumWash;
    } else {
      washStrategy = standardWash;
    }

    washStrategy(car);
  }
}

const carWash = new CarWash();
const myCar = new Car();
carWash.service(myCar, false);
