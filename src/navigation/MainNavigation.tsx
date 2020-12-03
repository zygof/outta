import React, { useEffect } from "react";
import { createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./AuthNavigation";
import MenuNavigation from "./MenuNavigation";
import RootStackScreen from "./RootStackScreen"

//import { userMethod } from "../../redux/user/actions";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

/*
const MyNavigator = (props) => createSwitchNavigator({
  routeNameOne: (props) => <RootStackNavigation {...props} />,
  routeNameTwo: (props) => <RootMainStackNavigation {...props} />,
});
*/

const MainNavigation = (props: any) => {
  /*
  const authContext = React.useMemo(
    () => ({
      //userMethod,
      toggleTheme: () => {
        //setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );
}

  useEffect(() => {
    setTimeout(async () => {
      //userMethod.getUserToken();
    }, 1000);
  }, []);
*/
  return (
    <MenuNavigation {...props} />
  );
}

const mapStateToProps = (state: any) => ({
  /*user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
  */
});

export default connect(mapStateToProps)(MainNavigation);

//export default MainNavigation;
