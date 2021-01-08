import { Timestamp } from "db";

export const newIssueReport = ({
  ibm,
  po,
  vender,
  location,
  container,
  uid,
}) => ({
  ibm,
  po,
  vender,
  location,
  container,
  createdBy: "000",
  createdByUid: "000",
  status: "draft",
  createdAt: Timestamp.fromDate(new Date()),
  images: [],
});
