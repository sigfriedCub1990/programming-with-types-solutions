declare const NsType: unique symbol;

class Ns {
    value: number
    [NsType]: unknown

    constructor(value: number) {
        this.value = value
    }
}

declare const LbfsType: unique symbol;

class Lbfs {
    value: number
    [LbfsType]: unknown

    constructor(value: number) {
        this.value = value
    }
}

function acceptsNs(momentum: Ns): void {
    console.log(`Momentum: ${momentum.value} Ns`)
}

acceptsNs(new Lbfs(10))

interface IPainter {
    name: string
}

class Painter implements IPainter {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

interface Wine {
    name: string
    year: number
}

interface Painting {
    name: string
    year: number
    painter: Painter
}

class Paint implements Painting {
    name: string;
    year: number;
    painter: Painter

    constructor(name: string, year: number, painter: Painter) {
        this.name = name
        this.year = year
        this.painter = painter
    }
}

class MyWine implements Wine {
    name: string;
    year: number;

    constructor(name: string, year: number) {
        this.name = name
        this.year = year
    }
}

function acceptsWine(wine: Wine) {
    console.log(wine)
}

function acceptsPainting(painting: Painting) {
    console.log(painting)
}


acceptsWine(
    new Paint(
        'The Isle of the Dead',
        1882,
        new Painter('Arnold Bocklin')
    )
)

acceptsPainting(
    new MyWine('Cabernet Sauvignon', 1720)
)

declare function makeNothing(): never

let x: number = makeNothing()

declare function makeUnknonwn(): unknown

let y: number = makeUnknonwn()
