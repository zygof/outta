import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SCREENS} from '../constants';

import {
  LoginScreen,
  RegisterScreen,
  RegisterEmailScreen,
  SplashScreen,
} from '../screens/Auth';

const StackAuth = createStackNavigator ();

const AuthNavigation = props => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.SPLACH}
    >
      <StackAuth.Screen
        options={{headerShown: false}}
        name={SCREENS.SPLACH}
        component={SplashScreen}
      />

      <StackAuth.Screen
        options={{headerShown: false}}
        name={SCREENS.LOGIN}
        component={LoginScreen}
      />

      <StackAuth.Screen
        options={{headerShown: false}}
        name={SCREENS.REGISTER}
        component={RegisterScreen}
      />

      <StackAuth.Screen
        options={{headerShown: false}}
        name={SCREENS.REGISTER_EMAIL}
        component={RegisterEmailScreen}
      />
    </StackAuth.Navigator>
  );
};

const mapStateToProps = state => ({
  userRecucer: state.userReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (AuthNavigation);
