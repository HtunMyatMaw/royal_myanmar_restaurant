<template>
    <main class="container py-5">
        <div class="form-group mb-3">
            <label for="foodEngName">Food English Name</label>
            <input v-model="foodObj.foodEngName" class="form-control" type="text" id="foodEngName"
                placeholder="Enter Food English Name">
        </div>

        <div class="form-group mb-3">
            <label for="foodJpName">Food Japan Name</label>
            <input v-model="foodObj.foodJpName" class="form-control" type="text" id="foodJpName"
                placeholder="Enter Food Japan Name">
        </div>

        <div class="form-group mb-3">
            <label for="foodMmName">Food Myanmar Name</label>
            <input v-model="foodObj.foodMmName" class="form-control" type="text" id="foodMmName"
                placeholder="Enter Food Myanmar Name">
        </div>

        <div class="form-group mb-3">
            <label for="foodExplainEng">About Food(English)</label>
            <textarea v-model="foodObj.foodExplainEng" class="form-control" id="foodExplainEng" rows="3"></textarea>
        </div>

        <div class="form-group mb-3">
            <label for="foodExplainJp">About Food(Japan)</label>
            <textarea v-model="foodObj.foodExplainJp" class="form-control" id="foodExplainJp" rows="3"></textarea>
        </div>

        <div class="form-group mb-3">
            <label for="foodExplainMm">About Food(Myanmar)</label>
            <textarea v-model="foodObj.foodExplainMm" class="form-control" id="foodExplainMm" rows="3"></textarea>
        </div>

        <div class="form-group mb-3">
            <label for="foodPrice">Price</label>
            <input v-model="foodObj.foodPrice" class="form-control" id="foodPrice" type="number">
        </div>

        <div class="form-group mb-3">
            <label for="foodNo">Food Id</label>
            <input v-model="foodObj.foodNo" class="form-control" id="foodNo" type="number">
        </div>

        <div class="form-group mb-3">
            <label for="foodType">Select Food Type</label>
            <select v-model="foodObj.foodType" class="form-control" id="foodType">
                <option v-for="fr in foodTypeRef" :value="fr.foodTypeInt">{{ fr.foodTypeString }}</option>
            </select>
        </div>

        <div class="from-group">
            <button class="form-control btn btn-success" @click="addMenuAction">Add Menu</button>
        </div>
    </main>
</template>

<script>
import DocSaveFormat from '@/dao/DocSaveFormat.js'

export default {
    data() {
        return {
            foodObj: {
                foodEngName: '',
                foodJpName: '',
                foodMmName: '',
                foodExplainEng: '',
                foodExplainJp: '',
                foodExplainMm: '',
                foodPrice: 0,
                foodNo: 1,
                foodType: '',
                foodImageUrl: ''
            },
            foodTypeRef: [
                {
                    foodTypeInt: 1,
                    foodTypeString: '揚げ物・炒め物'
                },
                {
                    foodTypeInt: 2,
                    foodTypeString: 'お米メニュー'
                },
                {
                    foodTypeInt: 3,
                    foodTypeString: 'サラダもの'
                },
                {
                    foodTypeInt: 4,
                    foodTypeString: 'スープ'
                },
                {
                    foodTypeInt: 5,
                    foodTypeString: 'クイックメニュー'
                },
                {
                    foodTypeInt: 6,
                    foodTypeString: '一週間前注文'
                }
            ]
        }
    },
    methods: {
        addMenuAction() {
            let obj = new DocSaveFormat('foods', this.foodObj)
            this.$store.dispatch('addNewDocumentAction', obj)
        }
    },
    created() {
        // do fetch process from firestore
    }
}
</script>

<style scoped></style>