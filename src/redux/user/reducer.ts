import userActions from "./constants";
import { Auth } from "../../utils/auth"
import { User } from "../../entities/users"
interface Actions {
  type: string;
  auth: Auth,
  user:any
}
const initialState = {
  name: "User",
  loggedIn: false,
  userCreate: false,
  userUpdate: false,
  user: {}
};

export default function userReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case userActions.SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userActions.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
      };
    case userActions.USER_CREATE:
      return {
        ...state,
        userCreate: true,
      };
    case userActions.USER_UPDATE:
      return {
        ...state,
        userUpdate: true,
      };
    default:
      return state;
  }
}
