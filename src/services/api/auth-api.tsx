import firebase from "firebase/app";
import "firebase/auth";
import { AuthDetails, User } from "../../models";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }: AuthDetails) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use.",
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format.",
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak.",
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute.",
        };
      default:
        return {
          error: "Check your internet connection.",
        };
    }
  }
};

export const loginUser = async ({ email, password }: AuthDetails) => {
  console.log(email + " " + password);
  email = "n.marry90@gmail.com";
  password = "test974";
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
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
        token: resultatUser.user?.refreshToken,
      };
      console.log("utilisateur : ", user);
      return {};
      /*store.setItem('userToken', user.token);
        return async function (dispatch: any) {
          dispatch({ type: userActions.SIGN_IN, user: user, token: "fzefzef" });
        }*/
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("erreur connexion");
      console.log(errorCode);
      console.log(errorMessage);
      switch (error.code) {
        case "auth/invalid-email":
          return {
            error: "Invalid email address format.",
          };
        case "auth/user-not-found":
        case "auth/wrong-password":
          return {
            error: "Invalid email address or password.",
          };
        case "auth/too-many-requests":
          return {
            error: "Too many request. Try again in a minute.",
          };
        default:
          return {
            error: "Check your internet connection.",
          };
      }
    });
};
export const sendEmailWithPassword = async (email: string) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format.",
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist.",
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute.",
        };
      default:
        return {
          error: "Check your internet connection.",
        };
    }
  }
};
