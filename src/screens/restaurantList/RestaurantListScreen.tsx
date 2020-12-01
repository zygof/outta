import React, { Component } from "react";
import {
  View,
  Button,
  StatusBar,
  FlatList,
  Platform,
  UIManager,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import { LineChart } from "react-native-svg-charts";
//import { GradientCard } from "react-native-gradient-card-view";
//import { Card, SimpleCard } from "@paraboly/react-native-card";
import { Card } from "react-native-elements";
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
import { MaterialIcons } from "@expo/vector-icons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import RNAnimated from "react-native-animated-component";

interface IProps {
  item: any;
}

interface IState {
  query: string;
  dataBackup: any;
  dataSource: any;
  isLoading: boolean;
  refreshing: boolean;
  spinnerVisibility: boolean;
  selectedItems: any;
}

const items = [
  // this is the parent or 'item'
  {
    name: "Catégorie",
    id: 1,
    // these are the children or 'sub items'
    children: [
      {
        name: "Apple",
        id: 10,
      },
      {
        name: "Strawberry",
        id: 17,
      },
      {
        name: "Pineapple",
        id: 13,
      },
      {
        name: "Banana",
        id: 14,
      },
      {
        name: "Watermelon",
        id: 15,
      },
      {
        name: "Kiwi fruit",
        id: 16,
      },
    ],
  },
  {
    name: "Fruits",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "Apple",
        id: 10,
      },
      {
        name: "Strawberry",
        id: 17,
      },
      {
        name: "Pineapple",
        id: 13,
      },
      {
        name: "Banana",
        id: 14,
      },
      {
        name: "Watermelon",
        id: 15,
      },
      {
        name: "Kiwi fruit",
        id: 16,
      },
    ],
  },
];

export default class RestaurantListScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: "",
      isLoading: true,
      refreshing: false,
      dataBackup: restaurantDATA,
      dataSource: restaurantDATA,
      spinnerVisibility: false,
      selectedItems: [],
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  onSelectedItemsChange = (selectedItems: any) => {
    this.setState({ selectedItems });
  };

  filterList = (text: string) => {
    var newData = this.state.dataBackup;
    if (this.state.dataBackup) {
      newData = this.state.dataBackup.filter((item: any) => {
        const itemData = item.franchise.nom.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
    }

    this.setState({
      query: text,
      dataSource: newData,
    });
  };

  renderItem(item: any) {
    return (
      <RNAnimated appearFrom="left" animationDuration={200}>
        <View key={item.franchise.nom}>
          <RestaurantComponent {...this.props} item={item} />
        </View>
      </RNAnimated>
    );
  }

  render() {
    const { spinnerVisibility } = this.state;
    return (
      <ScrollView style={styles.mainViewStyle}>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.container}>
          <SearchBar
            style={{ marginTop: 10 }}
            placeholder="Rechercher un restaurant..."
            spinnerVisibility={spinnerVisibility}
            onChangeText={(text) => {
              if (text !== undefined && text.length !== 0) {
                this.filterList(text);
                this.setState({});
              } else {
                this.filterList("");
                this.setState({});
              }
            }}
            onClearPress={() => {
              this.filterList("");
            }}
          />

          <View>
            <SectionedMultiSelect
              items={items}
              IconRenderer={MaterialIcons}
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
                      source={require("../../../assets/splash/lucas-benjamin-unsplash.jpg")}
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
              onSelectedItemsChange={(item) => this.onSelectedItemsChange(item)}
              selectedItems={this.state.selectedItems}
            />
          </View>

          <View style={styles.flatListStyle}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => this.renderItem(item)}
            >
            </FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
}
