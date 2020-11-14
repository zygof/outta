import userActions from "./constants";

const initialState = {
  name: "Jordan",
  loggedIn: false,
};

export default function userReducer(state = initialState, action:any) {
  switch (action.type) {
    case userActions.SIGN_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case userActions.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
