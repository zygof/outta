import userActions from "./constants";
//import { Auth } from "../../utils/auth"
import { User } from "@models"
interface Actions {
  type: string;
  user: User,
  token: string
}
const initialState = {
  loggedIn: false,
  isLoading: true,
  currentUser: null,
  userToken: null,
};

export default function franchiseReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case userActions.SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        currentUser: action.user,
        userToken: action.token,

      };
    case userActions.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
        isLoading: false,
        userToken: null,
        currentUser: null
      };
    case userActions.RETRIEVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        userToken: action.token,
      };
    default:
      return state;
  }
}
