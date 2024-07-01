import DataIf from './DataIf'
export default class Drink extends DataIf {
    constructor(drinkJpName, drinkEngName, drinkPrice) {
        super()
        this.drinkJpName = drinkJpName
        this.drinkEngName = drinkEngName
        this.drinkPrice = drinkPrice
    }

    toString() {
        return `${this.drinkJpName}, ${this.drinkEngName}, ${this.drinkPrice}`
    }

    static toFirestore() {
        return {
            drinkJpName: this.drinkJpName,
            drinkPrice: this.drinkPrice
        }
    }

    static fromFirestore(data) {
        return new Drink(data.drinkJpName, data.drinkEngName, data.drinkPrice)
    }
}
