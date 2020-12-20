import firebase from 'firebase/app'
import 'firebase/firestore'
import { fireKey } from './FireKeys'

const db = firebase
  .initializeApp(fireKey)
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp } 