/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Firestore | Cloud Database
 ******************************************/

import * as admin from 'firebase-admin'
import firebaseConfig from '../../config/firebase.json'

class Firestore {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
      databaseURL: process.env.DATABASE_URL
    })
    this.firestore = admin.firestore()
    this.firestore.settings({ timestampsInSnapshots: true })
  }

  getDbEntry = async (collection, doc) => {
    if (!collection || !doc) return undefined
    const snapshot = await this.firestore
      .collection(collection)
      .doc(doc)
      .get()
    return snapshot.data()
  }

  setDbEntry = async (collection, doc, entry) => {
    await this.firestore
      .collection(collection)
      .doc(doc)
      .set(entry)
    return 'Saved to database!'
  }

  deleteDbEntry = async (collection, doc) => {
    await firestore
      .collection(collection)
      .doc(doc)
      .delete()
    return 'Deleted from database!'
  }
}

/*****************************
 * Export
 ****************************/
export const { getDbEntry, setDbEntry, deleteDbEntry } = new Firestore()
