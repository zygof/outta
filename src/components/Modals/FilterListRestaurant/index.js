import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { View, Button, Text } from "react-native-ui-lib";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchBar from "react-native-dynamic-search-bar";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

export const FilterListRestaurant = (props) => {
  const { isModalVisible } = props;
  console.log("FilterListRestaurant", isModalVisible);
  return (
    <Modal
      isVisible={isModalVisible}
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating
      backdropColor={COLORS.primary}
      backdropOpacity={0.8}
      onBackdropPress={() => toggleModal}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        backgroundColor={COLORS.white}
        width="100%"
        height={SIZES.height / 1.06}
        style={{ borderRadius: 10 }}
      >
        <View row padding-20>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={COLORS.primary}
            style={{ position: "absolute", top: 15, left: 15 }}
          />
          <Text text70M style={{ width: "100%" }} center>
            Filtres
          </Text>
        </View>
        <View
          flex
          style={{ backgroundColor: COLORS.lightGray, borderRadius: 0 }}
        ></View>
        <View row padding-10>
          <Button
            marginB-40
            text70BO
            borderRadius={5}
            label="Terminé"
            backgroundColor={COLORS.primary}
            style={{ width: "100%", height: 50 }}
            center
          />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterListRestaurant);
