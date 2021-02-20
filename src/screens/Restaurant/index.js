import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

import { images, COLORS, FONTS, SIZES } from "../../constants";
import { restaurantDATA } from "../../data/restaurantDATA";

const getRestaurantById = (id) => {
  return restaurantDATA.filter((r) => r.id === id)[0];
};

const Restaurant = (props) => {
  const { route } = props;
  const { restaurantId, currentLocation } = route.params;
  const [restaurant, setRestaurant] = useState(getRestaurantById(restaurantId));

  useEffect(() => {
    (async function getRestaurant() {
      //let restaurant = await restaurantMethod.getById(restaurantId);
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageHeaderScrollView
        maxHeight={120}
        minHeight={120}
        fadeOutForeground
        headerImage={images.noodle_shop}
        overScrollMode="never"
        overlayColor={COLORS.transparent}
        overview={
          <View>
            <Text>opé</Text>
          </View>
        }
        maxOverlayOpacity={0.9}
        foregroundParallaxRatio={1}
      >
        <View
          style={{
            height: 1000,
          }}
        >
          <TriggeringView>
            <View
              style={{
                padding: SIZES.padding,
              }}
            >
              <Text
                style={{ fontSize: SIZES.font * 2, fontFamily: "Roboto-Bold" }}
              >
                {restaurant.franchise.nom} - {restaurant.adresse}
              </Text>
              <Image
                source={images.stopwatch}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: COLORS.lightGray1,
                borderBottomWidth: 0.2,
              }}
            />
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
});

export default Restaurant;
