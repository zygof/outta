import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./styles";
import Text from "@components/TextWrapper/Text";

export default class AProposScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> AProposScreen </Text>
      </View>
    );
  }
}
