import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen, SignUpScreen, SplashScreen } from "../screens/Auth";

const StackAuth = createStackNavigator();

const AuthNavigation = (props) => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LoginScreen"}
    >
      <StackAuth.Screen
        options={{ headerShown: false }}
        name={"LoginScreen"}
        component={LoginScreen}
      />

      <StackAuth.Screen
        options={{ headerShown: false }}
        name={"SignUpScreen"}
        component={SignUpScreen}
      />

      <StackAuth.Screen
        options={{ headerShown: false }}
        name={"SplashScreen"}
        component={SplashScreen}
      />
    </StackAuth.Navigator>
  );
};

export default AuthNavigation;
