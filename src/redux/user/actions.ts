import firebase from "../../config/firebase"
import { User } from "../../entities/users"
import userActions from "./constants";
import { MethodAuth } from "../../utils/auth-method"
import authFirebase from "../../services/auth-services"
import { Auth } from "../../utils/auth"

const collectionUsers = firebase.firestore().collection("users");

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

export function signIn(signinUser: User) {
  return async function (dispatch: any) {
    firebase.auth().signInWithEmailAndPassword(signinUser.email!, signinUser.password)
      .then((resultatUser) => {
        console.log("vous etes connecté :");
        console.log(resultatUser);
        let user: User = {
          name: "nikos",
          lastName: "zygof",
          email: resultatUser.user?.email,
          password: "fzf",
          age: 24,
          createdAt: "fe"
        }
        dispatch({ type: userActions.SIGN_IN, user: user });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("erreur connexion")
        console.log(errorCode);
        console.log(errorMessage);
      });

  };
}

export function signOut() {
  return async function (dispatch: any) {
    dispatch({ type: userActions.SIGN_OUT });
  };
}

export function getCurrentUser() {
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
}

export function updateUser(user: User) {
  return async function (dispatch: any) {
    var currentUser = firebase.auth().currentUser;

    currentUser!.updateProfile({
      displayName: user.name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }
}

export function sendEmailVerification() {
  return async function (dispatch: any) {
    var user = firebase.auth().currentUser;

    user!.sendEmailVerification().then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });
    dispatch({ type: "" });
  };
}

export function sendPasswordResetEmail() {
  return async function (dispatch: any) {
    var auth = firebase.auth();
    var emailAddress = "user@example.com";

    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });

    dispatch({ type: userActions.SIGN_OUT });
  };
}

export function signInAuth(method: MethodAuth) {
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
      console.log("salut");
      auth = authFirebase(provider);
      console.log("oulalal");
      console.log(auth);
      actionType = userActions.SIGN_IN;
      dispatchValue = { type: actionType, auth: auth }
    }
    dispatch(dispatchValue);
  };
}


/*
export function createUser(user: User) {
  return async function (dispatch: any) {
    collectionUsers.doc(user.email).set(user).then(() => {
      console.log("utilisateur ajouter");
      dispatch({ type: userActions.USER_CREATE });
    }).catch((error) => {
      console.log("Erreur d'insertion : " + error)
    })
  }
}
*/

/*
export function updateUser(user: User) {
  return async function (dispatch: any) {
    collectionUsers.doc(user.email).update(user).then(() => {
      console.log("utilisateur maj avec succès");
      dispatch({ type: userActions.USER_UPDATE });
    }).catch((error) => {
      console.log("Erreur de mise à jour d'un document : " + error)
    })
  }
}
*/