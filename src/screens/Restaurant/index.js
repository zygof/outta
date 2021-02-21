import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { Colors, Card, View, Button, Text } from "react-native-ui-lib";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

import { images, FONTS, SIZES, icons } from "../../constants";
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
    <View flex>
      <ImageHeaderScrollView
        maxHeight={130}
        minHeight={80}
        fadeOutForeground
        headerImage={images.noodle_shop}
        overScrollMode="never"
        overlayColor={Colors.primaryColor}
        maxOverlayOpacity={0.9}
        foregroundParallaxRatio={1}
      >
        <TriggeringView style={{ height: 1000 }}>
          <View padding-15>
            <Text text50M marginB-15>
              {restaurant.franchise.nom} - {restaurant.adresse}
            </Text>
            <Text marginB-15>
              Petit-déjeuner et brunch - Américain - Desserts - Adapté aux
              allergies alimentaires
            </Text>
            <View row centerV marginB-15>
              <Image
                source={icons.star}
                style={{
                  height: 14,
                  width: 14,
                  tintColor: Colors.primaryColor,
                  marginRight: 5,
                }}
              />
              <Text text85M color={Colors.primaryColor}>
                {restaurant.ratings} Excellent ({restaurant.reviews}+)
              </Text>
            </View>
            <View row centerV>
              <Image
                source={images.stopwatch}
                resizeMode="contain"
                style={{
                  width: 14,
                  height: 14,
                }}
              />
              <Text marginL-5 text75>
                20- 30 min
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.2,
            }}
          />
          <View padding-15>
            <Text text65M>Informations de l'étabilssements</Text>
            <Card height={100} center padding-card marginT-s4 marginB-s4 onPress={() =>console.log('map press')}>
              <Text body>This is an example card </Text>
            </Card>
          </View>
        </TriggeringView>
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
