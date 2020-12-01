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
import { reductionDATA } from "../../data/reductionDATA";
import { ReductionComponent } from "@components/Reduction";
import { MaterialIcons } from "@expo/vector-icons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { TouchableHighlight } from "react-native-gesture-handler";
import RNAnimated from "react-native-animated-component";
import { reductionMethod } from "../../redux/reduction/actions";
import { Reduction } from "../../models";

interface Props {
  item: any;
}

interface State {
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

async function getListeReduction() {

  await reductionMethod.getAll().then((listeReduction) => {
    return listeReduction;
  });
}

const ReductionListScreen = (props: Props) => {

  const [query, setQuery] = React.useState("");
  const [dataBackup, setDataBackup] = React.useState([]);
  const [dataSource, setDataSource] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);

  console.log("aoolloo")

  let initData;

  React.useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      await getListeReduction().then((value) => {
        console.log(value);
        return value;
        // expected output: "foo"
      });
    })();
  }, []);

  console.log("finishim", initData)

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onSelectedItemsChange = (selectedItems: any) => {
    setSelectedItems(selectedItems)
  };

  const filterList = (text: string) => {
    var newData = dataBackup;
    if (dataBackup) {
      newData = dataBackup.filter((item: any) => {
        const itemData = item.article.libelle.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    setDataSource(newData);
    setQuery(text);
  };

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
    <ScrollView style={styles.mainViewStyle}>
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
            onSelectedItemsChange={(item) => onSelectedItemsChange(item)}
            selectedItems={selectedItems}
            chipsWrapper={() => <Text>opté</Text>}
          />
        </View>

        <View style={styles.flatListStyle}>
          <FlatList
            data={dataSource}
            renderItem={({ item }) => renderItem(item)}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );

}


export default ReductionListScreen;
/*
export default class ReductionListScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    let initData;
    setTimeout(() => {
      initData = getListeReduction();
    }, 1000000); // resolves after 100,000ms

    console.log("ffffff", initData);

    state = {
      query: "",
      isLoading: true,
      refreshing: false,
      dataBackup: initData,
      dataSource: initData,
      spinnerVisibility: false,
      selectedItems: [],
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

}
*/