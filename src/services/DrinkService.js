import { FirebaseError } from 'firebase/app';
import Drink from '@/dao/Drink';
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

async function getSoftDrinks() {
    return new Promise((resolve, reject) => {
        getMultipleDocumentsByQuery('drinks', [where('drinkTypeInt', '==', 0)], [orderBy('createdDate', 'asc')])
            .then((response) => {
                if (response instanceof FirebaseError) {
                    reject(response)
                } else {
                    let dataList = []
                    response.forEach(obj => dataList.push(Drink.fromFirestore(obj)))
                    resolve(dataList)
                }
            })
            .catch(error => reject(error))
    })
}

async function getAlcoholDrinks() {
    return new Promise((resolve, reject) => {
        getMultipleDocumentsByQuery('drinks', [where('drinkTypeInt', '==', 1)], [orderBy('createdDate', 'asc')])
            .then((response) => {
                if (response instanceof FirebaseError) {
                    reject(response)
                } else {
                    let dataList = []
                    response.forEach(obj => dataList.push(Drink.fromFirestore(obj)))
                    resolve(dataList)
                }
            })
            .catch(error => reject(error))
    })
}

export {
    getSoftDrinks,
    getAlcoholDrinks
}