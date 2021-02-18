import { fakeIssueCodeData } from 'api/fakeData/issueCodeData';
import { createIssueCode } from 'api/issuesCode';
const initialState = {
  issues_codes: fakeIssueCodeData,
};

export function acCreateIssueCode(payload) {
  return async function (dispatch, getState) {
    const { auth } = getState();
    const { uid, fullName } = auth.user;
    try {
      createIssueCode({ data: payload, actionUser: { uid, fullName } });
    } catch (error) {}
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
