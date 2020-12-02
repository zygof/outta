import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
//import { Card } from "react-native-shadow-cards";
import { Card } from "react-native-elements";
import { colors } from " @theme";
import styles, { centerSubtitleStyle } from "./styles";
import { SCREENS } from "@main-constants";

import * as NavigationService from "react-navigation-helpers";
import ImagedCardView from "react-native-imaged-card-view";
import { Restaurant } from "../../models"

interface Props {
  restaurant: Restaurant;
  navigation: any;
}

export const RestaurantComponent = (props: Props) => {
  const { restaurant, navigation } = props;
  return (
    <TouchableOpacity style={{ paddingBottom: 25, paddingTop: 25 }}>
      <ImagedCardView
        stars={5}
        reviews={restaurant.reviews}
        ratings={restaurant.ratings}
        title={restaurant.franchise?.libelle}
        rightSideTitle="Distance"
        rightSideValue={0 + " km"}
        subtitle={restaurant.franchise?.categorie.libelle}
        leftSideTitle="Offres en cours"
        leftSideValue={restaurant.nbReductionEncours.toString()}
        backgroundColor="#7349BD"
        source={{
          uri: restaurant.franchise?.logo,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.RESTAURANT, props);
        }}
      />
    </TouchableOpacity>
  );
};

const stylesHere = StyleSheet.create({
  profileImgContainer: {
    marginRight: 8,
    height: 60,
    width: 60,
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
});
