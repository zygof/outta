import React from "react";
import Icon from "react-native-dynamic-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * ? Local Imports
 */
import { SCREENS } from "@main-constants";
// ? Screens
import RestaurantListScreen from "@screens/restaurantList/RestaurantListScreen";
import CompteScreen from "@screens/compte/CompteScreen";
import FavorisScreen from "@screens/favoris/FavorisScreen";
import ProfilScreen from "@screens/profil/ProfilScreen";
import AProposScreen from "@screens/aPropos/AProposScreen";
import AideScreen from "@screens/aide/AideScreen";
import RestaurantGestionScreen from "@screens/restaurantGestion/RestaurantGestionScreen";
import FranchiseScreen from "@screens/franchise/FranchiseScreen";
import RestaurantMenuScreen from "@screens/restaurantMenu/RestaurantMenuScreen";

import RestaurantScreen from "@screens/restaurant/RestaurantScreen";
import ReductionListScreen from "@screens/reductionList/ReductionListScreen";
import { Text, View } from "react-native";
import { HeaderBar } from "@components/HeaderBar";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fdfdfd",
  },
};

const MenuNavigation = (props: any) => {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName={SCREENS.REDUCTION_LIST}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";

            if (route.name === SCREENS.RESTAURANT_LIST) {
              iconName = focused ? "ios-home" : "planet-outline";
            } else if (route.name === SCREENS.REDUCTION_LIST) {
              iconName = focused ? "planet-outline" : "home-outline";
            } else if (route.name === SCREENS.COMPTE) {
              iconName = focused ? "planet-outline" : "home-outline";
            } else if (route.name === SCREENS.FRANCHISES) {
              iconName = focused ? "planet-outline" : "home-outline";
            }

            // You can return any component that you like here!
            return (
              <Icon name={iconName} type="Ionicons" size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "#A6A6A6",
          style: { backgroundColor: "#7349BD" },
        }}
      >
        <Tab.Screen name={SCREENS.FRANCHISES} component={FranchiseScreen} />

        <Tab.Screen
          name={SCREENS.REDUCTION_LIST}
          component={(ReductionListScreen)}
        />

        <Tab.Screen
          name={SCREENS.RESTAURANT_LIST}
          component={RestaurantListScreen}
        />
        <Tab.Screen name={SCREENS.COMPTE} component={CompteScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      {...props}
      theme={MyTheme}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator headerMode="screen" screenOptions={{}}>
        <Stack.Screen
          options={{ header: () => <View style={{ marginTop: 30 }}></View> }}
          name={SCREENS.HOME}
          component={renderTabNavigation}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerTransparent: false,
            title: "",
            headerStyle: {
              backgroundColor: "#7349BD",
            },
          }}
          name={SCREENS.RESTAURANT}
          component={RestaurantScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "#7349BD",
            title: "",
            headerTransparent: true,
          }}
          name={SCREENS.RESTAURANT_GESTION}
          component={RestaurantGestionScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "#7349BD",
            title: "",
            headerTransparent: true,
          }}
          name={SCREENS.RESTAURANT_MENU}
          component={RestaurantMenuScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerTransparent: false,
            headerStyle: {
              backgroundColor: "#7349BD",
            },
          }}
          name={SCREENS.FAVORIS}
          component={FavorisScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerTransparent: false,
            headerStyle: {
              backgroundColor: "#7349BD",
            },
          }}
          name={SCREENS.PROFIL}
          component={ProfilScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerTransparent: false,
            headerStyle: {
              backgroundColor: "#7349BD",
            },
          }}
          name={SCREENS.A_PROPOS}
          component={AProposScreen}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTintColor: "white",
            headerTransparent: false,
            headerStyle: {
              backgroundColor: "#7349BD",
            },
          }}
          name={SCREENS.AIDE}
          component={AideScreen}
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

export default connect(mapStateToProps)(MainNavigation);
*/
export default MenuNavigation;
