function epsiloEqual(a: number, b: number) {
  return Math.abs(a - b) <= Number.EPSILON;
}

console.log(0.1 + 0.1 + 0.1 === 0.3);
console.log(epsiloEqual(0.1 + 0.1 + 0.1, 0.3));
