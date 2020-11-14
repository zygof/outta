import moodsActions from "./constants";
import store from "../../redux";

export function addMood(item:any) {
  const currentStore = store.getState();
  const { moods } = currentStore.moods;

  const newMoods = [
    ...moods,
    item
  ];

  return async function (dispatch:any) {
    dispatch(setMoods(newMoods));
  }
}

export function setMoods(moods:any) {
  // On passe les infos au reducer, via le dispatcher.
  return async function (dispatch:any) {
    dispatch({
      type: moodsActions.SET_MOODS,
      moods: moods,
    })
  };
}
