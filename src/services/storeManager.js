import AsyncStorage from '@react-native-community/async-storage';
const storeManager = {
  getItem: async key => {
    try {
      const value = await AsyncStorage.getItem (key);
      if (value !== null) {
        // We have data!!
        //console.log ('getItem : ', key, JSON.stringify(value));
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log (error);
    }
  },
  setItem: async (key, data) => {
    try {
      await AsyncStorage.setItem (key, JSON.stringify(data));
      //console.log ('setItem : ', key, JSON.stringify(data));
    } catch (error) {
      // Error saving data
      console.log (error);
    }
  },
  removeItem: async key => {
    try {
      await AsyncStorage.removeItem (key);
    } catch (error) {
      // Error saving data
    }
  },
  removeItems: async key => {
    try {
      await AsyncStorage.multiRemove (key);
    } catch (error) {
      // Error saving data
    }
  },
  removeAllItem: async () => {
    try {
      await AsyncStorage.clear ();
    } catch (error) {
      // Error saving data
    }
  },
};
export default storeManager;
