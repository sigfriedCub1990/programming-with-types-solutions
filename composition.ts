class Shape {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Circle extends Shape {
  center: Point;
  radius: number;

  constructor(id: string, center: Point, radius: number) {
    super(id);
    this.radius = radius;
    this.center = center;
  }
}
