import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "./ReductionStyles";
import { SCREENS } from "../../constants";
import { icons, SIZES, COLORS, FONTS } from "../../constants";
import { View, Text, Card, Button } from "react-native-ui-lib";

import { restaurantDATA } from "../../data/restaurantDATA";

export const ReductionComponent = (props) => {
  const { reductionItem, navigation, currentLocation } = props;
  let reduction = reductionItem.item;
  const getRestaurantById = (id) => {
    return restaurantDATA.filter((r) => r.id === id)[0];
  };

  const colorJourRestant = (jourRestant) => {
    if (jourRestant <= 3) {
      return COLORS.danger;
    } else if (jourRestant <= 7) {
      return COLORS.warning;
    } else if (jourRestant > 7) {
      return COLORS.success;
    }
    return "";
  };

  return (
    <Card
      marginB-12
      padding-10
      paddingB-15
      borderRadius={0}
      onPress={() =>
        navigation.navigate(SCREENS.RESTAURANT, {
          restaurantId: reduction.restaurant.id,
          currentLocation,
        })
      }
    >
      {/* Image */}
      <View marginB-10>
        <Image
          source={reduction.article.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 180,
            borderRadius: SIZES.radius * 0.2,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 35,
            width: SIZES.width * 0.2,
            backgroundColor: COLORS.primary,
            borderTopRightRadius: SIZES.radius * 0.5,
            borderBottomLeftRadius: SIZES.radius * 0.2,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text text65M color={COLORS.white}>
            -{reduction.pourcentageReduction} %
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: 35,
            flex: 1,
            flexDirection: "row",
            width: SIZES.width * 0.37,
            backgroundColor: COLORS.primary,
            borderTopRightRadius: SIZES.radius * 0.2,
            borderBottomLeftRadius: SIZES.radius * 0.5,
            borderColor: COLORS.primary,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text
            text80M
            color={COLORS.danger}
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              marginRight: 5,
              color: COLORS.danger,
            }}
          >
            {reduction.article.prix}€
          </Text>
          <Text text65M color={COLORS.white}>
            {reduction.prixReduction}€
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            height: 30,
            width: SIZES.width * 0.45,
            backgroundColor: colorJourRestant(reduction.jourRestant),
            borderTopLeftRadius: SIZES.radius * 0.2,
            borderBottomRightRadius: SIZES.radius * 0.5,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text text70M color={COLORS.white}>
            {reduction.jourRestant}{" "}
            {reduction.jourRestant > 1 ? "heures restantes" : "heure restante"}
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 35,
            width: SIZES.width * 0.35,
            backgroundColor: COLORS.white,
            borderBottomRightRadius: SIZES.radius * 0.2,
            borderTopLeftRadius: SIZES.radius * 0.5,
            borderColor: COLORS.primary,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text text70H >20 - 30 min</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text text70M>{reduction.name}</Text>

      <View row
        style={{
          marginTop: SIZES.padding * 0.2,
          alignItems: "center",
        }}
      >
        {/* Rating */}
        <Image
          source={icons.star}
          style={{
            height: 14,
            width: 14,
            tintColor: COLORS.primary,
            marginRight: 5,
          }}
        />
        <Text text85M color={COLORS.primary}>
          {getRestaurantById(reduction.restaurant.id).ratings} Excellent (
          {getRestaurantById(reduction.restaurant.id).reviews}+)
        </Text>
        <Text text85M>
          {" "}
          -{" "}
        </Text>
        <Text text85M>
          {reduction.restaurant.franchise.categorie}
        </Text>
        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        ></View>
      </View>
      <View>
        <Text text85M>
          Riz - Avocat - Saumon - Sésame
        </Text>
      </View>
    </Card>
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
