/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContext,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Drawer } from "react-native-paper";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import DrawerContent from "../screens/DrawerContent";

import MainTabScreen from "../screens/MainTabScreen";
import SupportScreen from "../screens/SupportScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import { AuthContext } from "../components/Context";
import RootStackScreen from "../screens/RootStackScreen";

import { connect } from "react-redux";
import { userMethod } from "../redux/user/actions";

interface Props {}

const MainDrawer = createDrawerNavigator();

const MainNavigation = (props: Props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(
    () => ({
      userMethod,
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  const { user, userToken, isLoading } = props;
  useEffect(() => {
    setTimeout(async () => {
      userMethod.getUserToken();
    }, 1000);
  }, []);

  console.log(props);
  if (user.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log("je suis la : ", userToken)

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {user.userToken !== null ? (
            //{user.userToken !== null ? (
            <MainDrawer.Navigator
              drawerContent={(props) => (
                <View style={{ flex: 1 }}>
                  <DrawerContent {...props} />
                  <SignOutButton {...props} />
                </View>
              )}
            >
              <MainDrawer.Screen name="Offres" component={MainTabScreen} />
              <MainDrawer.Screen
                name="SupportScreen"
                component={SupportScreen}
              />
              <MainDrawer.Screen
                name="SettingsScreen"
                component={SettingsScreen}
              />
              <MainDrawer.Screen
                name="BookmarkScreen"
                component={BookmarkScreen}
              />
            </MainDrawer.Navigator>
          ) : (
            <RootStackScreen {...props} />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

const SignOutButton = (props: Props) => {
  const { navigation } = props;
  return (
    <Drawer.Section style={styles.bottomDrawerSection}>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        label="Sign Out"
        onPress={() => {
          userMethod.signOut();
          //user.userToken = "zefe"
        }}
      />
    </Drawer.Section>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(MainNavigation);

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
