import React, { Component, useEffect, useState } from "react";
import {
  View,
  Button,
  StatusBar,
  FlatList,
  Platform,
  UIManager,
  Text,
  Image,
  ScrollView, ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
/**
 *
 * ? Local Imports
 */
import SearchBar from "react-native-dynamic-search-bar";
import styles, { centerSubtitleStyle } from "./styles";
// Static Data
import { restaurantDATA } from "../../data/restaurantDATA";
import { RestaurantComponent } from "@components/Restaurant";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import RNAnimated from "react-native-animated-component";
import { restaurantMethod } from "../../redux/restaurant/actions";
import { franchiseMethod } from "../../redux/franchise/actions";
import { articleMethod } from "../../redux/article/actions";

import { Restaurant, Article } from "../../models";

interface Props { }

const listFiltre = [
  // this is the parent or 'item'
  {
    name: "Filtre",
    id: 1,
    // these are the children or 'sub items'
    children: [
      {
        name: "prix croissant",
        id: 1,
      },
      {
        name: "prix decroissant",
        id: 2,
      },
      {
        name: "Nom croissant",
        id: 3,
      },
      {
        name: "Nom décroissant",
        id: 4,
      },
      {
        name: "% réduction croissant",
        id: 5,
      },
      {
        name: "% réduction décroissant",
        id: 6,
      },
    ],
  }
];

export default function RestaurantListScreen(props: Props) {
  //const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState<any>([]);
  const [dataRestaurantBackup, setDataRestaurantBackup] = useState<Restaurant[]>([]);
  const [dataRestaurantSource, setDataRestaurantSource] = useState<Restaurant[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [spinnerVisibility, setSpinnerVisibility] = useState<boolean>(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);


  // Get our data
  useEffect(() => {
    (async function getListRestaurant() {
      console.log('salut');
      let listRestaurant = await restaurantMethod.getAll();
      setDataRestaurantSource(listRestaurant);
      setDataRestaurantBackup(listRestaurant);
    })().finally(() => setLoading(false));
  }, []);

  /*
  useEffect(() => {
    (async function createRestaurant() {
      await restaurantMethod.insert({
        id: 2,
        article: { id: 1, categorie: { id: 2, libelle: "opé" }, prix: 17, createdDate: new Date(), image: "image.jpg", libelle: "Chicken wings" },
        franchise: { id: 1, categorie: { id: 1, libelle: "fef" }, createdDate: new Date(), image: "image.png", libelle: "Mc Do", restaurants: null },
        pourcentageRestaurant: 17,
        prixAvecRestaurant: 19,
        jourRestant: 59,
        startDate: new Date(),
        endDate: new Date(),
        createdDate: new Date()
      })
    })().finally(() => null);
  }, []);
  */

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onSelectedItemsChange = (selectedItems: any) => {
    setSelectedRestaurant(selectedItems)
  };

  const filterList = (text: string) => {
    var newData = dataRestaurantBackup;
    if (dataRestaurantBackup) {
      newData = dataRestaurantBackup.filter((item: Restaurant) => {
        const itemData = item.rue;
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    setDataRestaurantSource(newData);
  };

  const renderItem = (restaurant: Restaurant) => {
    return (
      <RNAnimated appearFrom="left" animationDuration={200}>
        <View key={restaurant.id}>
          <RestaurantComponent {...props} restaurant={restaurant} />
        </View>
      </RNAnimated>
    );
  }

  return (
    <View style={styles.mainViewStyle}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <SearchBar
          style={{ marginTop: 10 }}
          placeholder="Rechercher..."
          spinnerVisibility={spinnerVisibility}
          onChangeText={(text) => {
            if (text !== undefined && text.length !== 0) {
              filterList(text);

            } else {
              filterList("");

            }
          }}
          onClearPress={() => {
            filterList("");
          }}
        />

        <View>
          <SectionedMultiSelect
            items={listFiltre}
            IconRenderer={Icon}
            uniqueKey="id"
            subKey="children"
            selectText="Trier par..."
            alwaysShowSelectText={true}
            showDropDowns={true}
            expandDropDowns={true}
            modalWithSafeAreaView={true}
            readOnlyHeadings={true}
            searchPlaceholderText="Filtrer par..."
            removeAllText="Enlever tout"
            confirmText="Confirmer"
            selectToggleIconComponent={() => <Text></Text>}
            dropDownToggleIconUpComponent={() => <Text></Text>}
            dropDownToggleIconDownComponent={() => <Text></Text>}
            noResultsComponent={() => (
              <SafeAreaView style={{ height: "100%", padding: 5 }}>
                <View>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Pas de résultat à votre recherche
                    </Text>
                </View>

                <TouchableHighlight
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("@assets/splash/lucas-benjamin-unsplash.jpg")}
                    style={{ height: "85%", width: "85%", borderRadius: 5 }}
                  />
                </TouchableHighlight>
              </SafeAreaView>
            )}
            renderSelectText={(props) => (
              <View
                style={{
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "900", color: "#5931FF" }}>
                  ajouter un filtre...
                  </Text>
              </View>
            )}
            colors={{
              primary: "#5931FF",
              text: "white",
              subText: "black",
              itemBackground: "#5931FF",
            }}
            onSelectedItemsChange={(item) => onSelectedItemsChange(item)}
            selectedItems={selectedRestaurant}
            chipsWrapper={() => <Text></Text>}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
            <View style={{
              flex: 1,
              flexGrow: 0,
              minHeight: '84.5%',
              flexDirection: 'row',
              alignItems: 'flex-start'
            }}>
              <FlatList
              style={{paddingBottom:1}}
                data={dataRestaurantSource}
                renderItem={({ item }) => renderItem(item)}
              ></FlatList>
            </View>
          )}
      </View>
    </View>
  );
}