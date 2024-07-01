const getters = {
    getCurrentYear: (state) => {
        return state.currentYear
    },
    getWorkingDays: (state) => {
        return state.workingDays
    },
    getSoftDrinks: (state) => {
        return state.softDrinks
    },
    getAlcoholDrinks: (state) => {
        return state.alcoholDrinks
    },
    getFoods: (state) => (obj) => {
        switch (obj.foodType) {
            case 1:
                return state.friedFoods
            case 2:
                return state.riceFoods
            case 3:
                return state.saladFoods
            case 4:
                return state.soupFoods
            case 5:
                return state.quickFoods
            case 6:
                return state.preorderFoods
        }
    }
}

export default getters