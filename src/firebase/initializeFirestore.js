import app from './initializeFirebase'
import { getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

export { db }