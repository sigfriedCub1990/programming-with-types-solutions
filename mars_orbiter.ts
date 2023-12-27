declare const lbfsType: unique symbol;
declare const nsType: unique symbol;

class Lbfs {
  readonly value: number;
  [lbfsType]: void;

  constructor(value: number) {
    this.value = value;
  }
}

class Ns {
  readonly value: number;
  [nsType]: void;

  constructor(value: number) {
    this.value = value;
  }
}

function lbfsToNs(lbfs: Lbfs) {
  return new Ns(lbfs.value * 4.448222);
}

function trajectoryCorrection(momentum: Ns) {
  if (momentum.value < new Ns(2).value) {
    // disintegrate
  }
}

function provideMomentum() {
  trajectoryCorrection(lbfsToNs(new Lbfs(1.5)));
}
