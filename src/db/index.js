import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { fireKey } from './FireKeys';

const db = firebase.initializeApp(fireKey).firestore();

const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const pushArrayUnion = firebase.firestore.FieldValue.arrayUnion;
const removeArrayUnion = firebase.firestore.FieldValue.arrayRemove;

const { Timestamp } = firebase.firestore;
export {
  projectStorage,
  timestamp,
  Timestamp,
  pushArrayUnion,
  removeArrayUnion,
};
export default db;
