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
import { colors } from "@theme";
import styles, { centerSubtitleStyle } from "./ReductionStyles";
import { SCREENS } from "@main-constants";
//import HomeScreen from "../../../screens/home/HomeScreen";
import * as NavigationService from "react-navigation-helpers";
import { Reduction } from "../../models"
import { capitalizeFirstLetter } from "@utils";

interface Props {
  reduction: Reduction;
  navigation: any
}

interface IState { }

export const ReductionComponent = (props: Props) => {
  const { reduction, navigation } = props;

  const colorJourRestant = (jourRestant: number) => {
    if (jourRestant <= 3) {
      return "#da3b36";
    } else if (jourRestant <= 7) {
      return "#da7e00";
    } else if (jourRestant > 7) {
      return "#068a06";
    }
    return "";
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.RESTAURANT);
      }}
    >
      <Card containerStyle={styles.cardStyle}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: -5,
          }}
        >
          <TouchableHighlight style={[stylesHere.profileImgContainer]}>
            <Image source={reduction.article.image} style={stylesHere.profileImg} />
          </TouchableHighlight>

          <View
            style={{
              flex: 1,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {reduction.article.libelle.toUpperCase()}
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                {capitalizeFirstLetter(reduction.article.categorie.libelle)}
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                {reduction.franchise.libelle.toUpperCase()}
              </Text>

              <Text>
                {/*reduction.franchise.Restaurants[0].adresse*/} {/*reduction.restaurant.codePostal*/}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingTop: 8,
              }}
            >
              <Text
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                  marginRight: 8,
                  fontSize: 15,
                  marginBottom: 5,
                  color: "#da3b36",
                }}
              >
                {reduction.article.prix}€
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>{reduction.prixAvecReduction}€</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end", minWidth: 100 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colorJourRestant(reduction.jourRestant),
                }}
              >
                {reduction.jourRestant} jour{reduction.jourRestant > 1 ? "s" : ""} restant
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 30, color: "#5931FF" }}
              >
                -{reduction.pourcentageReduction}%
              </Text>
            </View>
          </View>
        </View>
      </Card>
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
