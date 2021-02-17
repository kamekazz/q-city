import * as api from 'api';

export * from './connection';

export const createRef = (collection, docId) =>
  api.createRef(collection, docId);
