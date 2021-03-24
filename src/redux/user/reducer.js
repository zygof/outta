import userActions from './constants';

const initialState = {
  user: {
    email: '',
    password: ''
  },
  userToken: null,
  isLoggedIn: false
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case userActions.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        userToken: action.payload.userToken,
        isLoggedIn: action.payload.isLoggedIn,
        formSubmitted: false, // after update user formsubmition reset
      };
    case userActions.ADD_USER:
      return {
        ...state,
        user: action.payload.user,
        formSubmitted: false, // after update user formsubmition reset
      };
    case userActions.UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        formSubmitted: false, // after update user formsubmition reset
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
        formSubmitted: action.payload.status,
      };
    default:
      return state;
  }
}
