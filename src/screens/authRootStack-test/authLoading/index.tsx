import React, { memo } from "react";
import { ActivityIndicator, View } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import { Navigation } from "@models";
import { theme } from "@config/core/theme";
import { FIREBASE_CONFIG } from "@config/core/config";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
type Props = {
  navigation: Navigation;
};

const AuthLoadingScreen = ({ navigation }: Props) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <View>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default memo(AuthLoadingScreen);
