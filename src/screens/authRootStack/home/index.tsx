import React, { memo } from "react";
import Background from "@components/Background";
import Logo from "@components/Logo";
import Header from "@components/Header";
import Button from "@components/Button";
import Paragraph from "@components/Paragraph";
import { Navigation } from "@models";
//import { connect } from "react-redux";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Firebase Login</Header>

    <Paragraph>
      This template supports Firebase authorization out of the box.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

//export default memo(HomeScreen);

const mapStateToProps = (state: any) => ({
  user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
});

//export default connect(mapStateToProps)(HomeScreen);

export default HomeScreen;