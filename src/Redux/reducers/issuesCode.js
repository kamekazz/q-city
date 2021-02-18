import { fakeIssueCodeData } from 'api/fakeData/issueCodeData';
import { createIssueCode } from 'api/issuesCode';
import { Timestamp } from 'db';

const initialState = {
  issues_codes: fakeIssueCodeData,
};

export function acCreateIssueCode(payload) {
  return async function (dispatch, getState) {
    const { auth } = getState();
    const { uid, fullName } = auth.user;

    try {
      createIssueCode({
        ...payload,
        createdBy: fullName,
        createdByUid: uid,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default function issuesCodeReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    default:
      return state;
  }
}
