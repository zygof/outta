import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "./ReductionStyles";
import { SCREENS } from "../../services/constants";
import { icons, SIZES, COLORS, FONTS } from "../../constants";

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
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 2,
        padding: SIZES.padding,
        borderRadius: SIZES.radius * 0.5,
        ...styles.shadow,
      }}
      onPress={() =>
        navigation.navigate(SCREENS.RESTAURANT, {
          restaurantId: reduction.restaurant.id,
          currentLocation,
        })
      }
    >
      {/* Image */}
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
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
          <Text style={{ ...FONTS.h4, color: COLORS.white }}>
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
            style={{
              ...FONTS.h6,
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              marginRight: 5,
              color: COLORS.danger,
            }}
          >
            {reduction.article.prix}€
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: SIZES.h3,
              color: COLORS.white,
            }}
          >
            {reduction.prixReduction}€
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            height: 30,
            width: SIZES.width * 0.4,
            backgroundColor: colorJourRestant(reduction.jourRestant),
            borderTopLeftRadius: SIZES.radius * 0.2,
            borderBottomRightRadius: SIZES.radius * 0.5,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.white,
            }}
          >
            {reduction.jourRestant}{" "}
            {reduction.jourRestant > 1 ? "jours restants" : "jour restant"}
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
          <Text style={{ ...FONTS.h5, color: COLORS.black }}>20 - 30 min</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text style={{ ...FONTS.h4 }}>{reduction.name}</Text>

      <View
        style={{
          marginTop: SIZES.padding * 0.2,
          flexDirection: "row",
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
        <Text style={{ ...FONTS.h6, color: COLORS.primary }}>
          {getRestaurantById(reduction.restaurant.id).ratings} Excellent (
          {getRestaurantById(reduction.restaurant.id).reviews}+)
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: SIZES.h6 }}>
          {" "}
          -{" "}
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: SIZES.h6 }}>
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
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: SIZES.h6 }}>
          Sodexo - Swile
        </Text>
      </View>
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
