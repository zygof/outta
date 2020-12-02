import articleActions from "./constants";
//import { Auth } from "../../utils/auth"
import { Article } from "@models"
interface Actions {
  type: string;
  article: Article,
  token: string
}
const initialState = {
  loggedIn: false,
  isLoading: true,
  currentArticle: null,
  articleToken: null,
};

export default function articleReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case articleActions.SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        currentArticle: action.article,
        articleToken: action.token,

      };
    case articleActions.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
        isLoading: false,
        articleToken: null,
        currentArticle: null
      };
    case articleActions.RETRIEVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        articleToken: action.token,
      };
    default:
      return state;
  }
}
