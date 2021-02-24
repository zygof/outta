import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Restaurant,
  MapRestaurants,
  Franchise,
  Statistique,
  ReductionFranchise,
  RestaurantFranchise,
  ReglageFranchise,
  BadgeFranchise,
  Profil,
} from "../screens";
import MenuNavigation from "./MenuNavigation";

const Stack = createStackNavigator();

const MainNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"MenuNavigation"}
      >
        <Stack.Screen name="MenuNavigation" component={MenuNavigation} />
        <Stack.Screen name="Franchise" component={Franchise} />
        <Stack.Screen name="Statistique" component={Statistique} />
        <Stack.Screen name="ReductionFranchise" component={ReductionFranchise} />
        <Stack.Screen name="ReglageFranchise" component={ReglageFranchise} />
        <Stack.Screen name="BadgeFranchise" component={BadgeFranchise} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen
          name="RestaurantFranchise"
          component={RestaurantFranchise}
        />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
