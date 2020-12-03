import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/autRootStack/SplashScreen";
import SignInScreen from "../screens/autRootStack/SignInScreen";
import SignUpScreen from "../screens/autRootStack/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createStackNavigator();

interface Props { }

const RootStackScreen = (props: Props) => {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                <RootStack.Screen name="SignInScreen" component={SignInScreen} />
                <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

/*
const mapStateToProps = (state: any) => ({
  user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootStackScreen);
*/
export default RootStackScreen;