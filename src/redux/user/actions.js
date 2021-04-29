import userActions from './constants';
import {storeManager} from '../../utils';
import {authController} from '../../api/controllers';

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

export const login = (email, password) => async dispatch => {
  let user = null, userToken = null, isLoggedIn = false, errors = null;
  await authController.login ({email, password}).then (data => {
    if (!data.errors) {
      userToken = data.token;
      user = data.user;
      isLoggedIn = true;
      storeManager.setItem ('user', user);
      storeManager.setItem ('userToken', userToken);
    } else {
      errors = data.errors;
    }
  });

  dispatch ({
    type: userActions.LOGIN,
    payload: {user, userToken, isLoggedIn, errors},
  });
};

export const logout = () => {
  storeManager.removeItems (['user', 'userToken']);
  return {
    type: userActions.LOGIN,
    payload: {user: null, userToken: null, isLoggedIn: false, errors: null},
  };
};
