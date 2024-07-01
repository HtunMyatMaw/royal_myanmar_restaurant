const mutations = {
    getWorkingDaysMutation(state, obj) {
        state.workingDays = obj
    },
    getSoftDrinkMutation(state, obj) {
        state.softDrinks = obj
    },
    getAlcoholDrinkMutation(state, obj) {
        state.alcoholDrinks = obj
    },
    getFoodMutatuion(state, obj) {
        switch (obj.foodType) {
            case 1:
                state.friedFoods = obj.data
                break;
            case 2:
                state.riceFoods = obj.data
                break;
            case 3:
                state.saladFoods = obj.data
                break;
            case 4:
                state.soupFoods = obj.data
                break;
            case 5:
                state.quickFoods = obj.data
                break;
            case 6:
                state.preorderFoods = obj.data
                break;
        }
    }
}

export default mutations