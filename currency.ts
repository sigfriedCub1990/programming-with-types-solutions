class Currency {
    private dollars: number;
    private cents: number;

    constructor(dollars: number, cents: number) {
        if (!Number.isSafeInteger(dollars)) throw new Error("Can't safely represent dollars amount")

        if (!Number.isSafeInteger(cents)) throw new Error("Can't safely represent cents amount")

            this.dollars = dollars
            this.cents = cents
    }

    getDollars() {
        return this.dollars
    }

    getCents() {
        return this.cents
    }

    toString() {
        return `${this.dollars}.${this.cents}`
    }
}

export const add = (currency1: Currency, currency2: Currency) => {
    return new Currency(
        currency1.getDollars() + currency2.getDollars(),
        currency1.getCents() + currency2.getCents(),
    )
}

try {
    const res = add(new Currency(0, 2), new Currency(0, 1))
    console.log(res.toString())
} catch(error: unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}
