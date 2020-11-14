import { AsyncStorage } from "react-native";

export const getItems = async (key:any) => {
  console.log("KEY", key);
  try {
    const values = await AsyncStorage.getItem(key);
    const jsonValues = JSON.parse(values!);

    return jsonValues;
  } catch (e) {
    console.log('ERROR STORE.JS getItems - ', e.toString());
  }
}

export const setItems = async (key:any, values:any) => {
  console.log("VALUES SET", values);
  try {
    const jsonValues = JSON.stringify(values)
    await AsyncStorage.setItem(key, jsonValues);
  } catch (e) {
    console.log('ERROR STORE.JS setItems - ', e.toString());
  }
}
