import db from 'db';
// import { firestore } from 'db';

export function createIssueCode(payload) {
  return db
    .collection('issues_code')
    .add({ ...payload.data, ...payload.actionUser });
}

export function getAllIssuesCodes() {
  return db.collection('issues_code').get();
}

export function getIssuesCode(payload) {
  return db
    .collection('issues_code')
    .where('issue_code', '==', payload.issue_code);
}

export function updateIssuesCode(payload) {
  return db.collection('issues_code').doc(payload.id).update(payload.data);
}

export function deleteEventInFirestore(payload) {
  return db.collection('issues_code').doc(payload.data).delete();
}
