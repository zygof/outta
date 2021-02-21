import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Button, Text } from "react-native-ui-lib";
import { Foundation } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

export const AppSearchBar = () => {
  return (
    <View row padding-10>
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={(text) => console.log(text)}
        searchIconImageStyle={{ tintColor: COLORS.primary }}
        clearIconImageStyle={{ tintColor: COLORS.primary }}
        style={{flex:4}}
      />
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          marginLeft:10,
          flex:0.5
        }}
        /*onPress={toggleModal}*/
      >
        <Foundation name="filter" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};
