// Dumb example
// function distance(x1: number, y1: number, x2: number, y2: number) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
// }

// We can do better by defining a Pair<T1, T2> class
class Pair<T1, T2> {
    m0: T1
    m1: T2

    constructor(m0: T1, m1: T2) {
        this.m0 = m0
        this.m1 = m1
    }
}

// type Point = [number, number]
// type Point = Pair<number, number>
type Point = Record<"x" | "y", number>
type Point3D = Record<"x" | "y" | "z", number>
function distanceEnhanced(p1: Point, p2: Point) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}
