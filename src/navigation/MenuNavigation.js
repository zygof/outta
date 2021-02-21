import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Restaurant, MapRestaurants } from "../screens";
import Tabs from "./tabs";

const Stack = createStackNavigator();

const MenuNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"MapRestaurants"}
      >
        <Stack.Screen name="ListReduction" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MenuNavigation;
