import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurantDATA } from "../../data/restaurantDATA";
import { ScrollView } from "react-native-gesture-handler";
import { Franchise } from '../../models'
import Restaurant from "../../models/restaurant";
import { restaurantMethod } from "../../redux/restaurant/actions";

interface Props {
  navigation: any;
  route: any;
}

export const RestaurantMenuScreen = (props: Props) => {
  const { route } = props;
  const franchise: Franchise = route.params.franchise;

  console.log("props", props)

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataListRestaurant, setDataListRestaurant] = useState<Restaurant[]>([]);

  // Get our data
  useEffect(() => {
    (async function getListRestaurant() {
      setDataListRestaurant(await restaurantMethod.getByFranchiseID(franchise.id));

    })().finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ marginTop: 80 }}>
      <ListItem key={0} bottomDivider>
        <ListItem.Content>
          <ListItem.Title
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
          ></ListItem.Title>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ListItem.Subtitle
              style={{
                color: "#7349BD",
                marginBottom: 2,
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              {franchise.libelle}
              </ListItem.Subtitle>
          </View>
        </ListItem.Content>
      </ListItem>

      <ListItem
        key={1}
        topDivider
        bottomDivider
        containerStyle={{
          backgroundColor: "#fdfdfd",
        }}
        onPress={
          (props) => console.log("")
          //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
        }
      >
        <ListItem.Content style={{ marginLeft: 10 }}>
          <ListItem.Title style={{ fontWeight: "500" }}>
            Articles
            </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem
        key={2}
        topDivider
        bottomDivider
        containerStyle={{
          backgroundColor: "#fdfdfd",
        }}
        onPress={
          (props) => console.log("ici")
          //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
        }
      >
        <ListItem.Content style={{ marginLeft: 10 }}>
          <ListItem.Title style={{ fontWeight: "500" }}>
            Statistiques
            </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <View style={{ flexDirection: "row", alignItems: "center", margin: 20, marginBottom: 10, marginTop: 30 }}>
        <ListItem.Subtitle
          style={{
            color: "#7349BD",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Mes restaurants
          </ListItem.Subtitle>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#7349BD",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              +
              </Text>
          </TouchableOpacity>
        </View>
      </View>

      {dataListRestaurant.map((restaurant, i) => (
        <ListItem
          key={i}
          topDivider
          containerStyle={{
            backgroundColor: "#fdfdfd",
          }}
          onPress={(props) => console.log("")
            //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
          }
        >
          <ListItem.Content style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <ListItem.Title style={{ fontWeight: "500" }}>
                {franchise.libelle}
              </ListItem.Title>
              <ListItem.Subtitle style={{ marginTop: 3, color: "gray" }}>
                {restaurant.localisation.adresse} - {restaurant.localisation.codePostal}
              </ListItem.Subtitle>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}

export default RestaurantMenuScreen;