<template>
    <main class="container py-5">
        <h2 class="bottom_border mb-3 p-2">ソフトドリンク</h2>
        <div>
            <div v-for="drink in getSoftDrinks" class="d-flex drink-info gap-2">
                <div class="mb-3">
                    {{ drink.drinkJpName }} <br>
                    {{ drink.drinkEngName }}
                </div>
                <div></div>
                <div class="align-self-center mb-3">{{ drink.drinkPrice }}円</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        getSoftDrinks() {
            return this.$store.getters.getSoftDrinks
        }
    },
    created() {
        // do fetch process from firestore
        this.$store.dispatch('getSoftDrinkAction')
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