import { fakeIssueCodeData } from 'api/fakeData/issueCodeData';
import { createIssueCode } from 'api/issuesCode';
const initialState = {
  issues_codes: fakeIssueCodeData,
};

export function acCreateIssueCode(payload) {
  return async function (dispatch) {
    try {
      createIssueCode({ data: payload.data });
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
