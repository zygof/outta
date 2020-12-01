import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./styles";
import Text from "@components/TextWrapper/Text";

export default class FavorisScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> Favoris </Text>
      </View>
    );
  }
}
