import userActions from "./constants";

export function signIn() {
  return async function (dispatch:any) {
    dispatch({ type: userActions.SIGN_IN });
  };
}

export function signOut() {
  return async function (dispatch:any) {
    dispatch({ type: userActions.SIGN_OUT });
  };
}
