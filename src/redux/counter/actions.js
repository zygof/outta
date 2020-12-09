import { ADDITION, SUBTRACTION } from './constants';

export function addHandler() {
  // On passe les infos au reducer, via le dispatcher.
  return async function (dispatch) {
    dispatch({
      type: ADDITION,
    })
  };
}

export function subtractHandler() {
  // On passe les infos au reducer, via le dispatcher.
  return async function (dispatch) {
    dispatch({
      type: SUBTRACTION,
    })
  };
}
