import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createSwitchNavigator } from "react-navigation";
//import { connect } from "react-redux";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
} from "@screens/authRootStack";

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const ForgotPasswordStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const AuthLoadingStack = createStackNavigator();

const AuthNavigation = (props: any) => {
  return (
    <NavigationContainer
      {...props}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator headerMode="screen" screenOptions={{}}>
        <HomeStack.Screen
          options={{ headerShown: false }}
          name={"HomeScreen"}
          component={HomeScreen}
        />

        <LoginStack.Screen
          options={{ headerShown: false }}
          name={"LoginScreen"}
          component={LoginScreen}
        />

        <RegisterStack.Screen
          options={{ headerShown: false }}
          name={"RegisterScreen"}
          component={RegisterScreen}
        />

        <ForgotPasswordStack.Screen
          options={{ headerShown: false }}
          name={"ForgotPasswordScreen"}
          component={ForgotPasswordScreen}
        />

        <DashboardStack.Screen
          options={{ headerShown: false }}
          name={"Dashboard"}
          component={Dashboard}
        />

        <AuthLoadingStack.Screen
          options={{ headerShown: false }}
          name={"AuthLoadingScreen"}
          component={AuthLoadingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*
const mapStateToProps = (state: any) => ({
  user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(AuthNavigation);
*/
export default AuthNavigation;