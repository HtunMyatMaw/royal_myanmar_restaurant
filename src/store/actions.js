import { getWorkingDays } from "@/services/WorkDayService"
const actions = {
    getWorkingDaysAction(context) {
        getWorkingDays()
            .then((success) => {
                context.commit('getWorkingDaysMutation',success)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default actions