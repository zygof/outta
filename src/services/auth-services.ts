import firebase from "../config/firebase"
import { Auth } from "../utils/auth"

export default function authFirebase(provider: any): Auth {
  let auth: Auth = {isConnect:false};
  firebase.auth().signInWithPopup(provider).then(function (result: any) {
    console.log(result.user);
    auth = {
      isConnect: true,
      token: result.credential.accessToken,
      //secret: result.credential.secret,
      user: result.user,
      emailError: null,
      errorCode: null,
      errorMessage: null,
      credential: null
    }

  }).catch(function (error) {
    console.log("pas ok")
    console.log(error.message)
    auth = {
      isConnect: false,
      token: null,
      user: null,
      emailError: error.email,
      errorCode: error.code,
      errorMessage: error.message,
      credential: error.credential
    }
  });
  return auth;
}
