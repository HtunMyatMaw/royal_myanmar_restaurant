import { getWorkingDays } from "@/services/WorkDayService"
import { getSoftDrinks, getAlcoholDrinks } from "@/services/DrinkService"
import { getFoodsByFoodType } from "@/services/FoodServices"

import { addNewDocument } from "@/firebase/updateFirestoreData"
const actions = {
    getWorkingDaysAction(context) {
        getWorkingDays()
            .then((success) => {
                context.commit('getWorkingDaysMutation', success)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getSoftDrinkAction(context) {
        getSoftDrinks()
            .then((success) => {
                context.commit('getSoftDrinkMutation', success)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getAlcoholDrinkAction(context) {
        getAlcoholDrinks()
            .then((success) => {
                context.commit('getAlcoholDrinkMutation', success)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getFoodAction(context, obj) {
        getFoodsByFoodType(obj.foodType)
            .then((success) => {
                context.commit('getFoodMutatuion', { foodType: obj.foodType, data: success })
            })
            .catch((error) => {
                console.log(error)
            })
    },
    addNewDocumentAction(context, obj) {
        addNewDocument(obj)
            .then((success) => {
                console.log(success)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default actions