import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Button, Text } from "react-native-ui-lib";
import { Foundation } from "@expo/vector-icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBar from "react-native-dynamic-search-bar";
import FilterMapRestaurant from "../../components/Modals/FilterMapRestaurant";
import FilterListReduction from "../../components/Modals/FilterListReduction";
import FilterListRestaurant from "../../components/Modals/FilterListRestaurant";
import { COLORS, FONTS, SIZES } from "../../constants";

const AppSearchBar = (props) => {
  const { route } = props;
  const [
    isModalVisibleMapRestaurant,
    setIsModalVisibleMapRestaurant,
  ] = useState(false);
  const [
    isModalVisibleListRestaurant,
    setIsModalVisibleListRestaurant,
  ] = useState(false);
  const [
    isModalVisibleListReduction,
    setIsModalVisibleListReduction,
  ] = useState(false);

  const toggleModal = () => {
    switch (route.name) {
      case "MapRestaurant":
        setIsModalVisibleMapRestaurant(!isModalVisibleMapRestaurant);
        break;
      case "ListReduction":
        setIsModalVisibleListReduction(!isModalVisibleListReduction);
        break;
      case "ListRestaurant":
        setIsModalVisibleListRestaurant(!isModalVisibleListRestaurant);
        break;
    }
  };

  return (
    <View row padding-10>
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={(text) => console.log(text)}
        searchIconImageStyle={{ tintColor: COLORS.primary }}
        clearIconImageStyle={{ tintColor: COLORS.primary }}
        style={{ flex: 4 }}
      />
      <TouchableOpacity
        style={{
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          flex: 0.5,
        }}
        onPress={toggleModal}
      >
        <Foundation name="filter" size={30} color={COLORS.primary} />
      </TouchableOpacity>
      <FilterMapRestaurant isModalVisible={isModalVisibleMapRestaurant} />
      <FilterListReduction isModalVisible={isModalVisibleListReduction} />
      <FilterListRestaurant isModalVisible={isModalVisibleListRestaurant} />
    </View>
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AppSearchBar);
//export default AppSearchBar;
