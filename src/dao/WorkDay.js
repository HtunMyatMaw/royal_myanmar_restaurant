import DataIf from './DataIf'
export default class WorkDay extends DataIf {
    constructor(dayName, isHoliday, workingHours) {
        super()
        this.dayName = dayName
        this.isHoliday = isHoliday
        this.workingHours = workingHours
    }

    toString() {
        return `${this.dayName}, ${this.isHoliday}, ${this.workingHours}`
    }

    static toFirestore() {
        return {
            dayName: this.dayName,
            isHoliday: this.isHoliday,
            workingHours: this.workingHours
        }
    }

    static fromFirestore(data) {
        return new WorkDay(data.dayName, data.isHoliday, data.workingHours)
    }
}

// const workDayConverter = {
//     toFirestore: (workday) => {
// return {
//     dayName: workday.dayName,
//     isHoliday: workday.isHoliday,
//     workingHours: workday.workingHours
// }
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options)
//         return new WorkDay(data.dayName, data.isHoliday, data.workingHours)
//     }
// }