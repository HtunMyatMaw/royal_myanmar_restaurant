<template>
    <main class="container py-5">
        <h2 class="bottom_border mb-3 p-2">お酒（アルコール）</h2>
        <div>
            <div v-for="drink in getAlcoholDrinks" class="d-flex drink-info gap-2">
                <div class="mb-3">
                    {{ drink.drinkJpName }} <br>
                    {{ drink.drinkEngName }}
                </div>
                <div></div>
                <div class="align-self-center mb-3" v-if="typeof(drink.drinkPrice) == 'string'">
                    {{ drink.drinkPrice }}円
                </div>
                <div v-else class="align-self-center mb-3">
                    <span v-for="(dri,idx) in drink.drinkPrice">
                        {{ dri }}円
                        {{ (idx != drink.drinkPrice.length - 1) ? '、' :'' }}
                    </span>
                </div>
                <!-- <div>{{ drink.drinkPrice }}円</div> -->
            </div>
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        getAlcoholDrinks() {
            return this.$store.getters.getAlcoholDrinks
        }
    },
    created() {
        // do fetch process from firestore
        this.$store.dispatch('getAlcoholDrinkAction')
    }
}
</script>

<style scoped>
.drink-info > div:first-child {
    flex: 1;
    text-align: right;
}

.drink-info > div:nth-child(2) {
    border-right: 1px solid gray;
}

.drink-info > div:last-child {
    flex: 1;
}
</style>