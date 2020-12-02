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

const yosemite =
  "https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const islandBali =
  "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

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
        leftSideValue={restaurant.nbReductionEncours}
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
