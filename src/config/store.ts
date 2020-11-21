import { AsyncStorage } from "react-native";

const store = {
  getItem: async function (key: any) {
    try {
      const values = await AsyncStorage.getItem(key);
      const jsonValues = JSON.parse(values!);
      return jsonValues;
    } catch (e) {
      console.log('ERROR STORE.JS getItems - ', e.toString());
    }
  },

  setItem: async function (key: any, values: any) {
    console.log("VALUES SET", values);
    try {
      const jsonValues = JSON.stringify(values)
      await AsyncStorage.setItem(key, jsonValues);
    } catch (e) {
      console.log('ERROR STORE.JS setItems - ', e.toString());
    }
  },

  removeItem: async function (key: any) {
    try {
      await AsyncStorage.removeItem(key);
      return true
    } catch (e) {
      console.log('ERROR STORE.JS setItems - ', e.toString());
    }
  },

  removeAllItems: async function () {
    try {
      await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys));
      //.then(() => alert('success'));
      return true
    } catch (e) {
      console.log('ERROR STORE.JS setItems - ', e.toString());
    }
  }
}

export default store;