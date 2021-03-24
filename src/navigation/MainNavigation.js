import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

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
} from '../screens';
import {AuthNavigation, MenuNavigation} from './';

import {storeManager} from '../utils';

const Stack = createStackNavigator ();

const MainNavigation = props => {
  const {userReducer} = props;
  const [userTokenStore, setUserTokenStore] = useState (null);

  useEffect (() => {
    (async function checkUserToken () {
      checkUserTokenStore ();
    }) ();
  }, []);

  const checkUserTokenStore = () => {
    storeManager.getItem ('userToken').then (value => {
      setUserTokenStore (value);
    });
  };

  checkUserTokenStore ();

  return (
    <NavigationContainer>
      {userReducer.userToken || userTokenStore
        ? <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={'MenuNavigation'}
          >
            <Stack.Screen name="MenuNavigation" component={MenuNavigation} />
            <Stack.Screen name="Franchise" component={Franchise} />
            <Stack.Screen name="Statistique" component={Statistique} />
            <Stack.Screen
              name="ReductionFranchise"
              component={ReductionFranchise}
            />
            <Stack.Screen
              name="ReglageFranchise"
              component={ReglageFranchise}
            />
            <Stack.Screen name="BadgeFranchise" component={BadgeFranchise} />
            <Stack.Screen name="Profil" component={Profil} />
            <Stack.Screen
              name="RestaurantFranchise"
              component={RestaurantFranchise}
            />
            <Stack.Screen name="Restaurant" component={Restaurant} />
          </Stack.Navigator>
        : <AuthNavigation />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (MainNavigation);
