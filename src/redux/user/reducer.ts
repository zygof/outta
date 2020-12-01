import userActions from "./constants";
//import { Auth } from "../../utils/auth"
import { User } from "@models"
interface Actions {
  type: string;
  user: User,
  token: string
}
const initialState = {
  name: "Zygof",
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
