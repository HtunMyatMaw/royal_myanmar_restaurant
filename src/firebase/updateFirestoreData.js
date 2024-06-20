import { db } from './initializeFirestore'
import {
    doc,
    setDoc, // define doc id
    addDoc, // auto generate doc id
    updateDoc,
    collection
} from 'firebase/firestore'


async function addNewDocument(dbTableName, data, uniqId = null) {
    if (uniqId) {
        return await _addNewDocumentByAutoGenerateId(dbTableName, data)
    } else {
        return await _addNewDocumentByDocId(dbTableName, data, uniqId)
    }
}

const _addNewDocumentByDocId = async function (dbTableName, data, uniqId) {
    try {
        const docRef = doc(db, dbTableName, uniqId)
        await setDoc(docRef, data)
        return { 'status': 200, '': `Successfully inserted by docId=${uniqId}.` }
    } catch (error) {
        return error
    }
}

const _addNewDocumentByAutoGenerateId = async function (dbTableName, data) {
    try {
        const docRef = await addDoc(collection(db, dbTableName), data)
        return { 'status': 200, '': `Successfully inserted by docId=${docRef.id}.` }
    } catch (error) {
        return error
    }
}

async function updateDocument(dbTableName, data, docId) {
    try {
        const docRef = doc(db, dbTableName, docId)
        await updateDoc(docRef, data)
        return { 'status': 200, '': `Successfully updated by docId=${docId}.` }
    } catch (error) {
        return error
    }
}

export {
    addNewDocument,
    updateDocument
}