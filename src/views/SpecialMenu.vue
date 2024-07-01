<template>
    <main class="container py-5">
        <h2 class="bottom_border mb-3 p-2">一週間前注文</h2>
        <section>
            <!-- {{ getFriedFoods }} -->
            <div v-for="(food, index) in getFriedFoods"
                :class="index != getFriedFoods.length - 1 ? 'food-card-layout' : ''">
                <div v-if="index % 2 == 0" class="d-flex flex-column d-lg-flex flex-lg-row justify-content-center">
                    <div class="order-1 order-lg-1 align-self-center">
                        <img class="img-adjustment" :src="food.foodImageUrl" alt="food.foodEngName">
                    </div>
                    <div class="order-2 order-lg-2 align-self-center d-flex flex-column">
                        <span>{{ food.foodEngName }}</span>
                        <span v-if="food.foodExplainEng">
                            <small>({{ food.foodExplainEng }})</small>
                        </span>

                        <span>{{ food.foodJpName }}</span>
                        <span v-if="food.foodExplainJp">
                            <span v-if="typeof food.foodExplainJp == 'string'">
                                <small>({{ food.foodExplainJp }})</small>
                            </span>

                            <span v-else v-for="explain in food.foodExplainJp" class="d-flex flex-column">
                                <small>({{ explain }})</small>
                            </span>
                        </span>

                        <span>{{ food.foodMmName }}</span>
                        <span v-if="food.foodExplainMm">
                            <small>({{ food.foodExplainMm }})</small>
                        </span>

                        <span class="bg-theme text-light py-1 px-4 mt-2 align-self-start rounded">
                            {{ food.foodPrice == 0 ? '未確定' : food.foodPrice + '円' }}
                        </span>
                    </div>
                </div>

                <div v-else class="d-flex flex-column d-lg-flex flex-lg-row justify-content-center">
                    <div class="order-2 order-lg-1 align-self-center d-flex flex-column text-lg-end">
                        <span>{{ food.foodEngName }}</span>
                        <span v-if="food.foodExplainEng">
                            <small>({{ food.foodExplainEng }})</small>
                        </span>

                        <span>{{ food.foodJpName }}</span>
                        <span v-if="food.foodExplainJp">
                            <span v-if="typeof food.foodExplainJp == 'string'">
                                <small>({{ food.foodExplainJp }})</small>
                            </span>

                            <span v-else v-for="explain in food.foodExplainJp" class="d-flex flex-column">
                                <small>({{ explain }})</small>
                            </span>
                        </span>

                        <span>{{ food.foodMmName }}</span>
                        <span v-if="food.foodExplainMm">
                            <small>({{ food.foodExplainMm }})</small>
                        </span>

                        <span class="bg-theme text-light py-1 px-4 mt-2 align-self-start align-self-lg-end rounded">
                            {{ food.foodPrice == 0 ? '未確定' : food.foodPrice + '円' }}
                        </span>
                    </div>
                    <div class="order-1 order-lg-2 align-self-center">
                        <img class="img-adjustment" :src="food.foodImageUrl" alt="food.foodEngName">
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    computed: {
        getFriedFoods() {
            return this.$store.getters.getFoods({ foodType: 6 })
        }
    },
    created() {
        this.$store.dispatch('getFoodAction', { foodType: 6 })
    }
}
</script>

<style scoped>
.img-adjustment {
    height: 300px;
    object-fit: cover;
    object-position: center;
    -o-object-fit: cover;
    -o-object-position: center;
}

.food-card-layout {
    border-bottom: 1px solid #7e3c22;
    padding-bottom: 1rem;
}
</style>