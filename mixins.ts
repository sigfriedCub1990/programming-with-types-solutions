interface IHunter {
  track(): void;
  stalk(): void;
  pounce(): void;
}

class Animal {}
class Pet extends Animal {}

class HuntingBehavior implements IHunter {
  pray: Animal | undefined;

  track(): void {}
  stalk(): void {}
  pounce(): void {}
}

class Wolf extends Pet implements IHunter {
  private huntingBehavior: HuntingBehavior = new HuntingBehavior();

  track() {
    this.huntingBehavior.track();
  }

  stalk() {
    this.huntingBehavior.stalk();
  }

  pounce() {
    this.huntingBehavior.pounce();
  }
}
class Tiger {}
class Cat {}

// Mix-ins

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: unknown = {};

  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (<Second>result)[prop] = first[prop];
    }
  }
  return <First & Second>result;
}

class MeowingPet extends Pet {}

class HuntingBehaviour {
  track(): void {}
  stalk(): void {}
  pounce(): void {}
}

type TCat = MeowingPet & HuntingBehaviour;

const cat: TCat = extend(new MeowingPet(), new HuntingBehaviour());
