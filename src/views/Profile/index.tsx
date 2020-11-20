import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  signIn,
  signInAuth,
  signOut,
  createUser,
  updateUser,
} from "../../redux/user/actions";
import { User } from "../../entities/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MethodAuth } from "../../utils/auth-method";

const Profile = (props: any) => {
  const { signIn, signInAuth, signOut, createUser, updateUser, user } = props;

  const _toggleStatus = () => {
    if (!user.loggedIn) {
      //signInAuth(MethodAuth.GOOGLE);
      //console.log(user.auth);

      let userUpdate: User = {
        email: "n.marry90@gmail.com",
        name: "test",
        lastName: "trippies",
        age: 24,
        profession: "living",
        password:"test974"
      };
      //updateUser(userUpdate);
      //createUser(userUpdate);
      signIn(userUpdate);
    } else {
      signOut();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title={user.loggedIn ? "Se déconnecter" : "Se connecter"}
          onPress={_toggleStatus}
          color="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#00aad2",
    borderRadius: 10,
  },
});

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      signIn,
      signInAuth,
      signOut,
      createUser,
      updateUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
