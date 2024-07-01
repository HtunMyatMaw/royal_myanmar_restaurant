import { db } from './initializeFirestore'
import {
    doc,
    setDoc, // define doc id
    addDoc, // auto generate doc id
    updateDoc,
    collection
} from 'firebase/firestore'


async function addNewDocument(obj) {
    console.log(obj)
    if (!obj.uniqId) {
        return await _addNewDocumentByAutoGenerateId(obj)
    } else {
        return await _addNewDocumentByDocId(obj)
    }
}

const _addNewDocumentByDocId = async function (obj) {
    try {
        const docRef = doc(db, obj.dbTableName, obj.uniqId)
        await setDoc(docRef, obj.data)
        return { 'status': 200, '': `Successfully inserted by docId=${obj.uniqId}.` }
    } catch (error) {
        return error
    }
}

const _addNewDocumentByAutoGenerateId = async function (obj) {
    try {
        const docRef = await addDoc(collection(db, obj.dbTableName), obj.data)
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