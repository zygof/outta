import React, { Component, useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import colors from "@components/TextWrapper/node_modules/@colors";
import ImageSwiper from "@freakycoder/react-native-image-swiper";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { AnimatedRegion, Animated } from "react-native-maps";
import styles from "./styles";
import { reductionDATA } from "../../data/reductionDATA";
import RNAnimated from "react-native-animated-component";
import { ReductionComponent } from "@components/Reduction";
import { Restaurant, Filter, Reduction } from "../../models";
import { restaurantMethod } from "../../redux/restaurant/actions";
import { reductionMethod } from "../../redux/reduction/actions";

interface Props {
  route: any,
  navigation: any
}

export default function RestaurantScreen(props: Props) {
  const { route, navigation } = props;
  //const franchiseId: string = route.params.franchiseId;
  let restaurant: Restaurant = route.params.restaurant!;
  /*
  if (route.params.restaurant) {
    restaurant = route.params.restaurant!;
  } else if (route.params.reduction) {
    console.log(route.params.reduction)
      }
    */

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataReductionByRestaurant, setDataReductionByRestaurant] = useState<Reduction[]>([]);

  // Get our data
  useEffect(() => {
    (async function getListReductionByIdRestaurant() {
      const filter: Filter = { fieldPath: "franchise.id", opStr: "==", value: restaurant.franchise?.id }
      let listReduction = await reductionMethod.getByFranchiseId(restaurant.franchise?.id!)
      setDataReductionByRestaurant(listReduction);
      //setDataReductionByRestaurant(await restaurantMethod.getOneById(restaurant.id));
    })().finally(() => setLoading(false));
  }, []);



  const renderItem = (reduction: Reduction) => {
    return (
      <RNAnimated appearFrom="left" animationDuration={200} style={{ flex: 1 }}>
        <View key={reduction.article.libelle}>
          <ReductionComponent {...props} reduction={reduction} />
        </View>
      </RNAnimated>
    );
  }

  return (
    <ScrollView>
      <ImageSwiper
        imageHeight={200}
        images={restaurant.images}
      />
      <View style={{ flex: 1, paddingTop: 10 }}>
        <Text style={{ fontSize: 28, marginBottom: 15, marginLeft: 15 }}>
          {restaurant.franchise?.libelle}
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 15, marginLeft: 15 }}>
          {restaurant.franchise?.categorie.libelle}
        </Text>

        <View
          style={{
            borderBottomColor: "#7349BD",
            borderBottomWidth: 2,
            flex: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
            marginLeft: 15,
          }}
        >
          Détails de l'établissement
          </Text>
        <View style={{ marginBottom: 15, marginLeft: 15 }}>
          <Text style={{ color: "#7349BD" }}>
            {restaurant.adresse} - {restaurant.codePostal}
          </Text>
        </View>

        <View
          style={{
            borderBottomColor: "#7349BD",
            borderBottomWidth: 2,
            flex: 1,
            marginBottom: 15,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
            marginLeft: 15,
          }}
        >
          Heure d'ouverture
          </Text>
      </View>

      <View style={{ marginBottom: 15, marginLeft: 15 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          Lundi - Samedi
          </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          11h30 - 23h30
          </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          Dimanche
          </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          11h30 - 20h30
          </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
            marginLeft: 15,
          }}
        >
          Les réductions en cours
          </Text>

        <View style={styles.flatListStyle}>
          <FlatList
            data={dataReductionByRestaurant}
            renderItem={({ item }) => renderItem(item)}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
}
