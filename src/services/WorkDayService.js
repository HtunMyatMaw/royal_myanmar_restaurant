import WorkDay from '@/dao/WorkDay';
import {
    getSingleDocumentByDocId,
    getMultipleDocuments,
    getMultipleDocumentsByQuery
}
    from '../firebase/readFirestoreData';

async function getWorkingDays() {
    try {
        let dataList = []
        let response = await getMultipleDocuments('working_days')
        if (response) {
            response.forEach(obj => dataList.push(WorkDay.fromFirestore(obj)))
            return dataList
        } else {
            return null
        }
    } catch (error) {
        // Error Handling
        return error
    }
}

export {
    getWorkingDays
}