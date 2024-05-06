export default class DataIf {
    // constructor(currentObj) {
    //     this.currentObj = currentObj
    // }
    constructor() {
    }

    toFirestore() {
        // for (key in Object.keys(this.currentObj)) {
        //     this.currentObj[key] = dataObj[key]
        // }
        // return this.currentObj
        return `This's abstract method <toFirestore>.`
    }
    fromFirestore(snapshot) {
        // const data = snapshot.data()
        // for (key in Object.keys(this.currentObj)) {
        //     this.currentObj[key] = data[key]
        // }
        // return this.currentObj
        return `This's abstract method <fromFirestore>.`
    }
}