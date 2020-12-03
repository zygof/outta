import "react-native-gesture-handler";
import React from "react";
import { AppRegistry, StatusBar, StyleSheet, View } from "react-native";
import { isAndroid } from "@freakycoder/react-native-helpers";
import AnimatedSplash from "react-native-animated-splash-screen";
import MainNavigation from "./src/navigation/MainNavigation";
import { AppLoading } from "expo"
import * as Font from 'expo-font';

import { Provider } from "react-redux";
import store from "./src/redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import { createStore, combineReducers } from "redux";
import Navigation, { counter } from "./src/components/testComponent";

console.disableYellowBox = true;

const getFonts = () => Font.loadAsync({
  'suezone-regular': require('./assets/fonts/SuezOne-Regular.ttf')
});


const App = () => {

  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 1350);
  }, []);

  //let persistor = persistStore(Store);

  if (fontsLoaded) {
    return (
      <>
        <AnimatedSplash
          logoWidth={300}
          logoHeight={300}
          logoImage={null}
          isLoaded={isLoaded}
          backgroundColor={null}
          imageBackgroundResizeMode="cover"
          imageBackgroundSource={require("./assets/splash/lucas-benjamin-unsplash.jpg")}
        >
          <View style={styles.container}>
            <MainNavigation />
          </View>
        </AnimatedSplash>
      </>
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

AppRegistry.registerComponent("main", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
  },
});
