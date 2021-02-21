import React from "react";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { View, Button, Text } from "react-native-ui-lib";
import { Foundation } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

const FilterListReduction = (isVisible) => {
  return (
      <Modal isVisible={isVisible}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
  );
};

export default FilterListReduction;
