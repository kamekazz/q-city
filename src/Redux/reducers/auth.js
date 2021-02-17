import { SET_AUTH_USER, RESET_AUTH_STATE } from 'Redux/types';
import { combineReducers } from 'redux';

import * as api from 'api';

export const registerFireBase = (registerFormData) =>
  api.register({ ...registerFormData });

export const login = (loginData) => api.login({ ...loginData });

export const onAuthStateChanged = (onAuthCallback) =>
  api.onAuthStateChanged(onAuthCallback);

export const logout = (uid) => (dispatch) =>
  api
    .logout()
    .then((_) => {
      const userStatusDatabaseRef = api.createFirebaseRef('status', uid);
      return userStatusDatabaseRef.set(api.isOfflineForDatabase);
    })
    .then((_) => dispatch({ user: null, type: SET_AUTH_USER }));

export const storeAuthUser = (authUser) => (dispatch) => {
  dispatch({ type: RESET_AUTH_STATE });
  if (authUser) {
    return api
      .getUserProfile(authUser.uid)
      .then((userWithProfile) =>
        dispatch({ user: userWithProfile, type: SET_AUTH_USER })
      );
  } else {
    return dispatch({ user: null, type: SET_AUTH_USER });
  }
};

const initAuth = () => {
  const user = (state = {}, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return action.user;
      default:
        return state;
    }
  };

  const isAuth = (state = false, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return !!action.user;
      default:
        return state;
    }
  };
  const isAuthResolved = (state = false, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return true;
      case RESET_AUTH_STATE:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    user,
    isAuth,
    isAuthResolved,
  });
};

const auth = initAuth();
export default auth;
