import firebase from "@config/firebase"
import { User, Auth } from "@models"
import userActions from "./constants";
import { MethodAuth } from '../../services/auth-method'
//import { MethodAuth } from "../../utils/auth-method"
//import authFirebase from "../../services/auth-services"
//import { Auth } from "../../utils/auth"
import { setItems, getItems, removeItems } from "../../config/store";

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
        console.log("-----------------------------------------------------------------------")
        let user: User = {
          uid: resultatUser.uid,
          name: "nikos",
          lastName: "zygof",
          email: resultatUser.user?.email,
          phone: resultatUser.user?.phoneNumber,
          createdAt: resultatUser.user?.createdAt,
          token: resultatUser.user?.refreshToken
        }

        setItems('userToken', user.token);
        return async function (dispatch: any) {
          dispatch({ type: userActions.SIGN_IN, user: user, token: "fzefzef" });
        }
      })
      .catch((error) => {
        console.log("erreur code : ", error.code);
        console.log("erreur message : ", error.message);
      });
  },

  signUp: async (insertUser: User) => {
    return async function (dispatch: any) {
      firebase.auth().createUserWithEmailAndPassword(insertUser.email!, insertUser.password)
        .then((user) => {
          console.log("utilisateur créé : ");
          console.log(user);
        })
        .catch((error) => {
          console.log("erreur code : ", error.code);
          console.log("erreur message : ", error.message);
        });
      dispatch({ type: userActions.SIGN_UP });
    };
  },

  signOut: async () => {
    removeItems("userToken");
    return async function (dispatch: any) {
      dispatch({ type: userActions.SIGN_OUT });
    };
  },

  getUserToken: async () => {
    let userToken = getItems("userToken");
    return async function (dispatch: any) {
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }
  },
  sendEmailVerification: async () => {
    return async function (dispatch: any) {
      var user = firebase.auth().currentUser;
      user!.sendEmailVerification().then(function () {
        // Email sent.
      }).catch(function (error) {
        // An error happened.
      });
      dispatch({ type: "" });
    };
  },
  getCurrentUser: async () => {
    return async function (dispatch: any) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("user connecté : " + user);
        } else {
          console.log("non connecté");
        }
        dispatch({ user: user });
      });
    };
  },
  updateUser: async (user: User) => {
    return async function (dispatch: any) {
      var currentUser = firebase.auth().currentUser;
      currentUser!.updateProfile({
        displayName: user.name,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/outta-24538.appspot.com/o/logo.jpg?alt=media&token=66c4b5f4-ec12-42e6-8ea4-4ede894d32dc"
      }).then(function () {
        // Update successful.
      }).catch(function (error) {
        // An error happened.
      });
    }
  },

  sendPasswordResetEmail: async (emailAddress: string) => {
    return async function (dispatch: any) {
      var auth = firebase.auth();
      await auth.sendPasswordResetEmail(emailAddress).then(function () {
        // Email sent.
      }).catch(function (error) {
        // An error happened.
      });
      dispatch({ type: userActions.SIGN_OUT });
    };
  },

  signInAuth: async (method: MethodAuth) => {
    return async function (dispatch: any) {
      let auth: Auth;
      let provider: any = null;
      let actionType: string = "";
      let dispatchValue = { type: actionType, auth: { isConnect: false } }
      switch (method) {
        case MethodAuth.GOOGLE:
          actionType = userActions.SIGN_IN_GOOGLE;
          provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          break;
        case MethodAuth.FACEBOOK:
          actionType = userActions.SIGN_IN_FACEBOOK;
          provider = new firebase.auth.FacebookAuthProvider();
          provider.addScope('user_birthday');
          break;
        case MethodAuth.TWITTER:
          actionType = userActions.SIGN_IN_TWITTER;
          provider = new firebase.auth.TwitterAuthProvider();
          break;
        default:
          break;
      }
      console.log("ok");
      if (provider) {
        auth = authFirebase(provider);
        console.log("oulala");
        console.log(auth);
        actionType = userActions.SIGN_IN;
        dispatchValue = { type: actionType, auth: auth }
      }
      dispatch(dispatchValue);
    };
  }

}





