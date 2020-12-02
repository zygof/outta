import firebase from "../../config/firebase"
import { Reduction } from "../../models"
import reductionActions from "./constants";

import store from "@config/store";

const collectionReduction = firebase.firestore().collection("reductions");

export const reductionMethod = {
  insert: async (reduction: Reduction) => {
    //return async function (dispatch: any) {
    collectionReduction.add(reduction)
      .then(function (reductionRef) {
        console.log("Réduction ajouter avec succès !", reductionRef.id);
        //dispatch({ type: reductionActions.INSERT_REDUCTION, isInsert: true });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    //}
  },

  getAll: async () => {
    //return async function (dispatch: any) {
    let reductions: Array<any> = [];
    await collectionReduction.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        reductions.push(doc.data());
      });
      console.log("dans actions", " => ", reductions);

    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return reductions;
  },

  getByFranchiseId: async (franchiseId: string) => {
    //return async function (dispatch: any) {
    let reductions: Array<any> = [];
    console.log('franchiseId', franchiseId)
    await collectionReduction.where("franchise.id", "==", franchiseId).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        reductions.push(doc.data());
      });
      console.log("get reduction by franchise", " => ", reductions);
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return reductions;
  },

  update: async (reduction: Reduction) => {
    return async function (dispatch: any) {
      const docId = reduction.id.toString;
      collectionReduction.doc(docId).set(reduction)
        .then(function () {
          console.log("Réduction ajouter avec succès !");
          dispatch({ type: reductionActions.INSERT_REDUCTION, isInsert: true });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  },

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

export function signIn(email: string, password: string) {
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
        dispatch({ type: userActions.SIGN_IN, user: user, token: user.token });
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("erreur connexion")
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export async function getUserToken() {
  let userToken = store.getItem("userToken");
  return async function (dispatch: any) {
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }
}

export function removeUserAsync() {
  const user = store.removeItems("user");
  return async function (dispatch: any) {
    dispatch({ type: userActions.RESTORE, user: null });
  }
}

export function removeAllAsync() {
  store.removeAllItems();
  return async function (dispatch: any) {
    dispatch({});
  }
}

export function signOut() {
  store.removeItem("userToken");
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
*/

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