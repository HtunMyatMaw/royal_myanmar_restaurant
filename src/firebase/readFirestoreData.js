import { db } from './initializeFirestore'
import {
    doc,
    getDoc,
    collection,
    getDocs,
    query,
}
    from 'firebase/firestore'

/**
 * 
 * @param {*} dbTableName 
 * @param {*} uniqId 
 * @returns a single document
 */
async function getSingleDocumentByDocId(dbTableName, uniqId) {
    try {
        const docRef = doc(db, dbTableName, uniqId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return null
        }
    } catch (error) {
        return error
    }
}

/**
 * 
 * @param {*} dbTableName 
 * @returns document array(list)
 */
async function getMultipleDocuments(dbTableName) {
    try {
        let dataList = []
        const querySnapshot = await getDocs(collection(db, dbTableName))
        querySnapshot.forEach((doc) => dataList.push(doc.data()))
        return dataList
    } catch (error) {
        return error
    }
}

/**
 * 
 * @param {*} dbTableName 
 * @param {*} whereClauses 
 * @param {*} orderClauses 
 * @returns document array(list)
 */
async function getMultipleDocumentsByQuery(dbTableName, whereClauses, orderClauses) {
    try {
        let dataList = []
        const q = query(collection(db, dbTableName), ...whereClauses, ...orderClauses)
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => dataList.push(doc.data()))
        return dataList
    } catch (error) {
        return error
    }
}

export {
    getSingleDocumentByDocId,
    getMultipleDocuments,
    getMultipleDocumentsByQuery
}
