import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import moods from "./moods/reducer";
import user from "./user/reducer";

const reducers = {
  moods,
  user: user
};

export default createStore(
  persistCombineReducers(
    {
      key: "root",
      storage: AsyncStorage,
    },
    reducers
  ),
  composeWithDevTools(applyMiddleware(thunk))
);

export async function getItems(key: any) {

  try {
    const values = await AsyncStorage.getItem(key);
    const jsonValues = JSON.parse(values!);
    return jsonValues;
  } catch (e) {
    console.log('ERROR STORE.JS getItems - ', e.toString());
  }
}

export async function setItems(key: any, values: any) {
  console.log("VALUES SET", values);
  try {
    const jsonValues = JSON.stringify(values)
    await AsyncStorage.setItem(key, jsonValues);
  } catch (e) {
    console.log('ERROR STORE.JS setItems - ', e.toString());
  }
}

export async function removeItems(key: any) {
  try {
    await AsyncStorage.removeItem(key);
    return true
  } catch (e) {
    console.log('ERROR STORE.JS setItems - ', e.toString());
  }
}

export async function removeAllItems() {
  try {
    await AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys));
    //.then(() => alert('success'));
    return true
  } catch (e) {
    console.log('ERROR STORE.JS setItems - ', e.toString());
  }
}