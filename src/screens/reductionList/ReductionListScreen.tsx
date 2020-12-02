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
import { reductionDATA } from "../../data/reductionDATA";
import { ReductionComponent } from "@components/Reduction";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import RNAnimated from "react-native-animated-component";
import { reductionMethod } from "../../redux/reduction/actions";
import { franchiseMethod } from "../../redux/franchise/actions";
import { articleMethod } from "../../redux/article/actions";

import { Reduction, Article } from "../../models";

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

export default function ReductionListScreen(props: Props) {
  //const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState<any>([]);
  const [dataBackup, setDataBackup] = useState<Reduction[]>([]);
  const [dataSource, setDataSource] = useState<Reduction[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [spinnerVisibility, setSpinnerVisibility] = useState<boolean>(false);
  const [selectedReduction, setSelectedReduction] = useState([]);


  // Get our data
  useEffect(() => {
    (async function getListReduction() {
      let listReduction = await reductionMethod.getAll();
      setDataSource(listReduction);
      setDataBackup(listReduction);
    })().finally(() => setLoading(false));
  }, []);

  /*
  useEffect(() => {
    (async function insertReduction() {
      await reductionMethod.insert({
        id: 2,
        article: { id: 1, categorie: { id: 2, libelle: "opé" }, prix: 17, createdDate: new Date(), image: "image.jpg", libelle: "Chicken wings" },
        franchise: { id: 1, categorie: { id: 1, libelle: "fef" }, createdDate: new Date(), image: "image.png", libelle: "Mc Do", restaurants: null },
        pourcentageReduction: 17,
        prixAvecReduction: 19,
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
    setSelectedReduction(selectedItems)
  };

  const filterList = (text: string) => {
    var newData = dataBackup;
    if (dataBackup) {
      newData = dataBackup.filter((item: Reduction) => {
        const itemData = item.article.libelle.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    setDataSource(newData);
  };

  const renderItem = (reduction: Reduction) => {
    return (
      <RNAnimated appearFrom="left" animationDuration={200}>
        <View key={reduction.article.libelle}>
          <ReductionComponent {...props} reduction={reduction} />
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
            selectedItems={selectedReduction}
            chipsWrapper={() => <Text>opté</Text>}
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
                data={dataSource}
                keyExtractor={(reduction: Reduction, index) => reduction.id}
                renderItem={({ item }) => renderItem(item)}
              ></FlatList>
            </View>
          )}
      </View>
    </View>
  );
}