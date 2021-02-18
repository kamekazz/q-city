import db from 'db';

export const createRef = (collection, docId) =>
  db.doc(`${collection}/` + docId);

export * from './auth';
export * from './connection';
