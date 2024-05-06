import { getWorkingDays } from "@/services/WorkDayService"
const actions = {
    getWorkingDaysAction(context) {
        getWorkingDays()
            .then((success) => {
                console.log(success)
                // commit data to state by mutation
                context.commit('getWorkingDaysMutation',success)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default actions