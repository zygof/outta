import React, { Component } from "react";
import { View } from "react-native";
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { HeaderBackButton } from "@react-navigation/stack";

interface Props {
  items: any;
}

interface IState {}

export const HeaderBar = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={{ marginTop: 50 }}>
      <ModernHeader
        text="Profile"
        height={50}
        rightIconType="Ionicons"
        rightIconName="ios-home"
        /*rightIconColor={colors.light.primary}
                leftIconComponent={your - icon - component}
                rightIconComponent={your - icon - component}*/
        leftIconOnPress={() => (
          <HeaderBackButton onPress={() => navigation.goBack()} />
        )}
      />
    </View>
  );
};
