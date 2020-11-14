import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from "react-redux";
import Store from "./src/redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  let persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <MainNavigation/>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
  },
});
