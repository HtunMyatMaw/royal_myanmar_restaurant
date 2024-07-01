import DataIf from './DataIf'
export default class Food extends DataIf {
    constructor(
        foodEngName,
        foodExplainEng,
        foodJpName,
        foodExplainJp,
        foodMmName,
        foodExplainMm,
        foodPrice,
        foodImageUrl) {
        super()
        this.foodEngName = foodEngName
        this.foodExplainEng = foodExplainEng
        this.foodJpName = foodJpName
        this.foodExplainJp = foodExplainJp
        this.foodMmName = foodMmName
        this.foodExplainMm = foodExplainMm
        this.foodPrice = foodPrice
        this.foodImageUrl = foodImageUrl
    }

    toString() {
        return `${this.foodEngName}, ${this.foodExplainEng}, ${this.foodJpName}, ${this.foodExplainJp}, ${this.foodMmName}, ${this.foodExplainMm}, ${this.foodPrice}, ${this.foodImageUrl}`
    }

    static toFirestore() {
        return {
            foodEngName: this.foodEngName,
            foodExplainEng: this.foodExplainEng,
            foodJpName: this.foodJpName,
            foodExplainJp: this.foodExplainJp,
            foodMmName: this.foodMmName,
            foodExplainMm: this.foodExplainMm,
            foodPrice: this.foodPrice,
            foodImageUrl: this.foodImageUrl
        }
    }

    static fromFirestore(data) {
        return new Food(
            data.foodEngName,
            data.foodExplainEng,
            data.foodJpName,
            data.foodExplainJp,
            data.foodMmName,
            data.foodExplainMm,
            data.foodPrice,
            data.foodImageUrl,
        )
    }
}