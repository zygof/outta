import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import ReduxPage from './src/screens/ReduxPage';
import Store from "./src/redux";
import MenuNavigation from "./src/navigation/MenuNavigation"
import { AppLoading } from "expo"
import * as Font from 'expo-font';
//import { ThemeProvider } from 'react-native-elements';

const getFonts = () => Font.loadAsync({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
});

const App = (props) => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  let persistor = persistStore(Store);
  if (fontsLoaded) {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
            <MenuNavigation />
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
