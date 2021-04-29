import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import Store from "./src/redux";
import MainNavigation from "./src/navigation/MainNavigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { configComponents, configFoundation } from "./src/config";

console.disableYellowBox = true;
const getFonts = () =>
  Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.otf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.otf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.otf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.otf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.otf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.otf"),
  });

const config = () => {
  getFonts();
  configFoundation();
  configComponents();
};

const App = (props) => {
  const [isConfigured, setIsConfigured] = React.useState(false);
  let persistor = persistStore(Store);
  if (isConfigured) {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={config} onFinish={() => setIsConfigured(true)} />
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
