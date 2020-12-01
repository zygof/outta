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
interface Props {
  items: any;
}

interface IState {}

export const ReductionComponent = (props: Props) => {
  const { item, navigation } = props;

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
            <Image source={item.article.image} style={stylesHere.profileImg} />
          </TouchableHighlight>

          <View
            style={{
              flex: 1,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {item.article.libelle.toUpperCase()}
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                {item.restaurant.franchise.nom.toUpperCase()}
              </Text>
              {/*<Text style={{ fontWeight: "bold", color: "gray" }}>
                {item.restaurant.franchise.categorie.toUpperCase()}
              </Text>*/}
              <Text>
                {item.restaurant.adresse} - {item.restaurant.codePostal}
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
                {item.article.prix}€
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>{item.prixReduction}€</Text>
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
                  color: colorJourRestant(item.jourRestant),
                }}
              >
                {item.jourRestant} jour{item.jourRestant > 1 ? "s" : ""} restant
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
                -{item.pourcentageReduction}%
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
