import React, { Component, useEffect, useState } from "react";
import {
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, Card } from "react-native-ui-lib";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
/**
 * ? Local Imports
 */
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  GOOGLE_API_KEY,
} from "../../../constants";

//import { franchiseMethod } from "../../redux/franchise/actions";

const Franchise = (props) => {
  const { route, navigation } = props;
  const [franchise, setFranchise] = useState({});

  useEffect(() => {
    (async function getFranchise() {
      setFranchise(route.params.franchise);
    })();
  }, []);

  return (
    <SafeAreaView>
      <View
        row
        centerV
        padding-15
        style={{ borderBottomColor: COLORS.primary, borderBottomWidth: 0.2 }}
      >
        <View>
          <MaterialCommunityIcons
            name="chevron-left"
            onPress={() => navigation.goBack()}
            size={30}
            color={COLORS.primary}
          />
        </View>
        <View flex paddingR-30>
          <Text center text60H color={COLORS.primary}>
            {franchise.nom}
          </Text>
        </View>
      </View>
      <View padding-15>
        <View row>
          <Card
            flex
            margin-5
            center
            padding-card
            onPress={() =>
              navigation.navigate("Statistique", { franchise: franchise })
            }
          >
            <MaterialCommunityIcons
              name="chart-line"
              size={50}
              color={COLORS.primary}
              style={{ padding: 8 }}
            />
            <Text text70M>Statistiques</Text>
          </Card>
          <Card
            flex
            margin-5
            center
            padding-card
            onPress={() =>
              navigation.navigate("Article", { franchise: franchise })
            }
          >
            <MaterialCommunityIcons
              name="food-apple"
              size={50}
              color={COLORS.primary}
              style={{ padding: 8 }}
            />
            <Text text70M>Articles</Text>
          </Card>
        </View>
        <View row>
          <Card
            flex
            margin-5
            center
            padding-card
            onPress={() =>
              navigation.navigate("RestaurantFranchise", {
                franchise: franchise,
              })
            }
          >
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={50}
              color={COLORS.primary}
              style={{ padding: 8 }}
            />
            <Text text70M>Restaurants</Text>
          </Card>
          <Card
            flex
            margin-5
            center
            padding-card
            onPress={() =>
              navigation.navigate("ReglageFranchise", {
                franchise: franchise,
              })
            }
          >
            <MaterialCommunityIcons
              name="settings"
              size={50}
              color={COLORS.primary}
              style={{ padding: 8 }}
            />
            <Text text70M>Réglages</Text>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalClose: {
    marginBottom: 0,
    marginRight: 20,
    alignItems: "flex-end",
    borderWidth: 0,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    marginTop: 30,
  },
});
export default Franchise;
