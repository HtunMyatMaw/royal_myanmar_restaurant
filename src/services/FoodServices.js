import { FirebaseError } from 'firebase/app';
import Food from '@/dao/Food';
import {
    where,
    orderBy
} from '@/firebase/queryUtilsFirestore'
import {
    getSingleDocumentByDocId,
    getMultipleDocuments,
    getMultipleDocumentsByQuery
}
    from '../firebase/readFirestoreData';

async function getFoodsByFoodType(foodType) {
    return new Promise((resolve, reject) => {
        getMultipleDocumentsByQuery('foods', [where('foodType', '==', foodType)], [orderBy('foodNo', 'asc')])
            .then((response) => {
                if (response instanceof FirebaseError) {
                    reject(response)
                } else {
                    let dataList = []
                    response.forEach(obj => dataList.push(Food.fromFirestore(obj)))
                    resolve(dataList)
                }
            })
            .catch(error => reject(error))
    })
}

export {
    getFoodsByFoodType
}