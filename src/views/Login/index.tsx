import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signIn } from "../../redux/user/actions";

interface Props{
}

const Login = (props:Props) => {
    const { signIn, user } = props;

  return (
    <View>
    <TextInput
      placeholder="Username"
      value={"username"}
    />
    <TextInput
      placeholder="Password"
      value={"password"}
      secureTextEntry
    />
    <Button title="Sign in" onPress={() => signIn({ username, password })} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const mapStateToProps = (state:any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch:any) =>
  bindActionCreators(
    {
        signIn,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
