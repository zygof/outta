import userActions from './constants';
import {storeManager} from '../../utils';

export const addProfile = user => ({
  type: userActions.ADD_USER,
  payload: {user},
});

export const updateProfileImage = image => ({
  type: userActions.UPDATE_PROFILE_PICTURE,
  payload: {image},
});

export const updateProfile = user => ({
  type: userActions.UPDATE_USER,
  payload: {user},
});

export const formSubmittionStatus = status => ({
  type: userActions.FORM_SUBMITION_STATUS,
  payload: {status},
});

export const login = (email, password) => {
  let user = null, userToken = null, isLoggedIn = false;
  if (email == 'test@test.fr' && password == 'aaaaaaaa') {
    user = {email, password};
    userToken = 'diazotkoma';
    isLoggedIn = true;
    storeManager.setItem ('user', user);
    storeManager.setItem ('userToken', userToken);
  }
  return {type: userActions.LOGIN, payload: {user, userToken, isLoggedIn}};
};

export const logout = () => {
  storeManager.removeItems (['user', 'userToken']);
  return {
    type: userActions.LOGIN,
    payload: {user: null, userToken: null, isLoggedIn: false},
  };
};
