import { combineReducers } from 'redux';
import auth from './auth';
import issuesCodeReducer from './issuesCode';

const rootReducer = combineReducers({
  auth,
  issuesCodeReducer,
});

export default rootReducer;
