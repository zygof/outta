import firebase from "@config/firebase"
import { User } from "@models"
import userActions from "./constants";
//import { MethodAuth } from "../../utils/auth-method"
//import authFirebase from "../../services/auth-services"
//import { Auth } from "../../utils/auth"
import store from "@config/store";

const collectionUsers = firebase.firestore().collection("users");

export const userMethod = {
  signIn: async (email: string, password: string) => {
    console.log(email + " " + password);
    email = "n.marry90@gmail.com";
    password = "test974";
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((resultatUser) => {
        console.log("vous etes connecté :");
        console.log(resultatUser);
        let user: User = {
          name: "nikos",
          lastName: "zygof",
          email: resultatUser.user?.email,
          password: "fzf",
          age: 24,
          createdAt: "fe",
          token: resultatUser.user?.refreshToken
        }
        store.setItem('userToken', user.token);
        return async function (dispatch: any) {
          dispatch({ type: userActions.SIGN_IN, user: user, token: "fzefzef" });
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("erreur connexion")
        console.log(errorCode);
        console.log(errorMessage);
      });
  },

  signOut: async () => {
    store.removeItem("userToken");
    return async function (dispatch: any) {
      dispatch({ type: userActions.SIGN_OUT });
    };
  },

  getUserToken: async () => {
    let userToken = store.getItem("userToken");
    return async function (dispatch: any) {
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }
  }
}
/*
export function createUser(insertUser: User) {
  return async function (dispatch: any) {
    firebase.auth().createUserWithEmailAndPassword(insertUser.email!, insertUser.password)
      .then((user) => {
        console.log("utilisateur créé : ");
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("erreur connexion")
        console.log(errorCode);
        console.log(errorMessage);
      });
    dispatch({ type: userActions.SIGN_IN });
  };
}

export function signOut() {
  return async function (dispatch:any) {
    dispatch({ type: userActions.SIGN_OUT });
  };
}
