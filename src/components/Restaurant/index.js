import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "./RestaurantStyles";
import { SCREENS } from "../../constants";
import { icons, SIZES, COLORS, FONTS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Card, Button } from "react-native-ui-lib";

import { restaurantDATA } from "../../data/restaurantDATA";

export const RestaurantComponent = (props) => {
  const { restaurantItem, navigation, currentLocation } = props;
  let restaurant = restaurantItem.item;
  return (
    <Card
      marginB-20
      padding-10
      paddingB-15
      borderRadius={5}
      onPress={() =>
        navigation.navigate(SCREENS.RESTAURANT, {
          restaurantId: restaurant.id,
          currentLocation,
        })
      }
    >
      <View row>
        <Image
          source={restaurant.franchise.mainPhoto}
          resizeMode="cover"
          style={{
            width: "40%",
            height: 150,
            borderRadius: SIZES.radius * 0.2,
          }}
        />
        <View
          flex
          justifyContent="center"
          style={{
            alignItems: "center",
          }}
        >
          <Text text50M marginB-2>
            {restaurant.franchise.name}
          </Text>
          <Text text70R marginB-2>
            {restaurant.franchise.categorie}
          </Text>
          <View row centerV marginB-2>
            <MaterialCommunityIcons
              name="star"
              size={20}
              color={COLORS.primary}
            />
            <Text text80M color={COLORS.primary}>
              {restaurant.ratings} Excellent ({restaurant.reviews}+)
            </Text>
          </View>
          <View row centerV marginB-2>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={20}
              color={COLORS.success}
            />
            <Text text80M marginL-2 color={COLORS.success}>
              10 réductions en cours
            </Text>
          </View>
          <View row centerV style={{ position: "absolute", top: 0, right: 0 }}>
            <MaterialCommunityIcons
              name="timer"
              size={20}
              color={COLORS.primary}
            />
            <Text marginL-5 text75>
              20- 30 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          ></View>
        </View>
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
