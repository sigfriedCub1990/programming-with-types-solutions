import { Circle } from "./composition";

namespace GeometryLibrary {
  export interface ICircle {
    getCenterX(): number;
    getCenterY(): number;
    getDiameter(): number;
  }
}

export class CircleAdapter implements GeometryLibrary.ICircle {
  private circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }

  getCenterY(): number {
    return this.circle.center.y;
  }

  getCenterX(): number {
    return this.circle.center.x;
  }

  getDiameter(): number {
    return this.circle.radius * 2;
  }
}
