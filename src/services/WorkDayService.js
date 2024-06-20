import { FirebaseError } from 'firebase/app';
import WorkDay from '@/dao/WorkDay';
import {
    orderBy
} from '@/firebase/queryUtilsFirestore'
import {
    getSingleDocumentByDocId,
    getMultipleDocuments,
    getMultipleDocumentsByQuery
}
    from '../firebase/readFirestoreData';

async function getWorkingDays() {
    return new Promise((resolve, reject) => {
        getMultipleDocumentsByQuery('working_days', [], [orderBy('dayId', 'asc')])
            .then((response) => {
                if (response instanceof FirebaseError) {
                    reject(response)
                } else {
                    let dataList = []
                    response.forEach(obj => dataList.push(WorkDay.fromFirestore(obj)))
                    resolve(dataList)
                }
            })
            .catch(error => reject(error))
    })
}

export {
    getWorkingDays
}