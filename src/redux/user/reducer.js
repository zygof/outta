import userActions from './constants';
import {UserModel} from '../../models';

const initialState = {
  user: UserModel,
  userToken: null,
  isLoggedIn: false,
  errors: null,
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case userActions.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        userToken: action.payload.userToken,
        isLoggedIn: action.payload.isLoggedIn,
        errors: action.payload.errors,
      };
    case userActions.ADD_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case userActions.UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case userActions.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        user: {
          ...state.profile,
          profileImage: action.payload.image,
        },
      };
    case userActions.FORM_SUBMITION_STATUS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
