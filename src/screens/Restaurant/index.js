import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TextInput, FlatList, ActivityIndicator } from "react-native";
import { Colors, Card, View, Button, Text } from "react-native-ui-lib";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { images, FONTS, SIZES, COLORS, icons } from "../../constants";
import { restaurantDATA } from "../../data/restaurantDATA";
import { ENTRIES1, ENTRIES2 } from "../../data/entries";
import CarouselCards from "../../components/Carousel";
import { reductionDATA } from "../../data/reductionDATA";
import { ReductionComponent } from "../../components/Reduction";

const getRestaurantById = (id) => {
  return restaurantDATA.filter((r) => r.id === id)[0];
};

const Restaurant = (props) => {
  const { route } = props;
  const { restaurantId, currentLocation } = route.params;
  const [restaurant, setRestaurant] = useState(getRestaurantById(restaurantId));
  const [reductions, setReductions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [entries, setEntries] = useState(ENTRIES1);

  useEffect(() => {
    (async function getRestaurant() {
      //let restaurant = await restaurantMethod.getById(restaurantId);
    })();
    (async function getListReduction() {
      //let listReduction = await reductionMethod.getAll();
      let listReduction = reductionDATA;
      setReductions(listReduction);
    })().finally(() => setLoading(false));
  }, []);

  const renderListReduction = () => {
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={reductions}
            contentContainerStyle={{paddingBottom:SIZES.width * 0.4}}
            renderItem={(reduction) => (
              <ReductionComponent
                {...props}
                reductionItem={reduction}
                currentLocation={"currentLocation"}
              />
            )}
          />
        )}
      </View>
    );
  };

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
        <TriggeringView>
          <View padding-15>
            <Text text50M marginB-15>
              {restaurant.franchise.name} - {restaurant.adresse}
            </Text>
            <View flex>

            </View>
            <Text marginB-15>
              Petit-déjeuner et brunch - Américain - Desserts - Adapté aux
              allergies alimentaires
            </Text>
            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="star"
                size={20}
                color={COLORS.primary}
              />
              <Text text70M color={Colors.primaryColor}>
                {restaurant.ratings} Excellent ({restaurant.reviews}+)
              </Text>
            </View>
            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={20}
                color={COLORS.success}
              />
              <Text text70M marginL-2 color={COLORS.success}>
                10 réductions en cours
              </Text>
            </View>
            <Button backgroundColor={COLORS.primary} borderRadius={5}>
              <View row center>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color={COLORS.white}
                style={{marginRight:5}}
              />
              <Text white text70M>Réserver au {restaurant.phone}</Text>
              </View>
            </Button>
          </View>
          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.6,
            }}
          />
          <View padding-15>
            <Text text65M>Informations de l'étabilssement</Text>
            <Card
              height={100}
              center
              padding-card
              marginT-s4
              marginB-s4
              onPress={() => console.log("map press")}
            >
              <Text body>Redirection vers MAP </Text>
            </Card>
            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="map"
                size={20}
                color={COLORS.primary}
              />
              <Text marginL-5 text70>
                Adresse de l'étabilssements
              </Text>
            </View>

            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="timer"
                size={20}
                color={COLORS.primary}
              />

              <Text marginL-5 text75>
                20- 30 min
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.6,
            }}
          />
          <View padding-15>
            <Text text65M style={{ paddingBottom: 15 }}>
              Photos de l'étabilssement
            </Text>
            <CarouselCards />
          </View>

          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.8,
            }}
          />
          <View padding-15>
            <Text text65M>Liste des réductions disponibles</Text>
          </View>
          {renderListReduction()}
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
