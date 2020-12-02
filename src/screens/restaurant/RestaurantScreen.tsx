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
import { Restaurant, Filter } from "../../models";
import { restaurantMethod } from "../../redux/restaurant/actions";

interface Props {
  route: any,
  navigation: any
}

export default function RestaurantScreen(props: Props) {
  const { route, navigation } = props;
  const restaurant: Restaurant = route.params.restaurant;

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataReductionByRestaurant, setDataReductionByRestaurant] = useState([]);

  const filterByJourRestantAndRestaurant = () => {
    const filter: Filter = { fieldPath: "", opStr: "==", value: restaurant.id }
    var stock: any = [];
    reductionDATA.forEach((item) => {
      item.jourRestant > 0 && item.restaurant.franchise.id == 1
        ? stock.push(item)
        : console.log("nop");
    });
    return stock;
  }

  // Get our data
  useEffect(() => {
    (async function getRestaurantById() {
      //setDataReductionByRestaurant(await restaurantMethod.getOneById(restaurant.id));
    })().finally(() => setLoading(false));
  }, []);



  const renderItem = (item: any) => {
    return (
      <RNAnimated appearFrom="left" animationDuration={200} style={{ flex: 1 }}>
        <View key={item.article.libelle}>
          <ReductionComponent {...props} item={item} />
        </View>
      </RNAnimated>
    );
  }

  return (
    <ScrollView>
      <ImageSwiper
        imageHeight={200}
        images={[
          {
            uri:
              "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
          },
          {
            uri:
              "https://images.unsplash.com/photo-1555149385-c50f336e28b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          },
          {
            uri:
              "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
          },
        ]}
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
