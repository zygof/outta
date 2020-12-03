import React from "react";
import { StyleSheet } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../../services/context/auth";

interface Props {}

const SignOutButton = (props: Props) => {
  const { navigation } = props;
  const { userMethod } = React.useContext(AuthContext);
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

export default SignOutButton;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
