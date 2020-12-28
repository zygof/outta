import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Store, { getItems } from "./src/redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import MainNavigation from "./src/navigation/MainNavigation";
import * as Sentry from "sentry-expo";

export default function App() {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <MainNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
}

Sentry.init({
  dsn:
    "https://a0aca1cacfbb4e71bb7b55bfc3a6cd7b@o416157.ingest.sentry.io/5517182",
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

// Access any @sentry/react-native exports via:
//Sentry.Native.*

// Access any @sentry/browser exports via:
//Sentry.Browser.*

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
  },
});
