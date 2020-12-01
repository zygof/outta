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
import HomeScreen from "@screens/home/HomeScreen";
import * as NavigationService from "react-navigation-helpers";
import ImagedCardView from "react-native-imaged-card-view";

interface Props {
  items: any;
}

interface IState {}

const yosemite =
  "https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const islandBali =
  "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export const RestaurantComponent = (props: Props) => {
  const { item, navigation } = props;

  return (
    <TouchableOpacity style={{ paddingBottom: 25, paddingTop: 25 }}>
      <ImagedCardView
        stars={5}
        reviews={item.reviews}
        ratings={item.ratings}
        title={item.franchise.nom}
        rightSideTitle="Distance"
        rightSideValue={3.8 + " km"}
        subtitle={item.franchise.categorie}
        leftSideTitle="Offres en cours"
        leftSideValue={item.nbReductionEncours}
        backgroundColor="#7349BD"
        source={{
          uri: yosemite,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.RESTAURANT);
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
