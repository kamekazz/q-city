import { Timestamp } from 'db';

export const newIssueReport = ({
  ibm,
  po,
  vender,
  location,
  container,
  uid,
  createdBy,
}) => ({
  ibm,
  po,
  vender,
  location,
  container,
  createdBy,
  createdByUid: uid,
  status: 'draft',
  createdAt: Timestamp.fromDate(new Date()),
  images: [],
});
