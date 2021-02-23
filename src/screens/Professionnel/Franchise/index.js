import React, { Component, useEffect, useState } from "react";
import {
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native-ui-lib";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
/**
 * ? Local Imports
 */
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  GOOGLE_API_KEY,
} from "../../../constants";

//import { franchiseMethod } from "../../redux/franchise/actions";

const Franchise = (props) => {
  const { route } = props;
  const [franchise, setFranchise] = useState({});

  useEffect(() => {
    (async function getFranchise() {
      setFranchise(route.params.franchise);
    })();
  }, []);

  return (
    <SafeAreaView>
      <View padding-15>
        <Text>{franchise.nom}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalClose: {
    marginBottom: 0,
    marginRight: 20,
    alignItems: "flex-end",
    borderWidth: 0,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    marginTop: 30,
  },
});
export default Franchise;
