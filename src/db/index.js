import firebase from 'firebase/app'
import 'firebase/firestore'
import { firekey } from './firekeys'

const db = firebase
  .initializeApp(firekey)
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp } 