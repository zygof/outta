import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { franchiseDATA } from "../../data/franchiseDATA";
import { ScrollView } from "react-native-gesture-handler";
import { Franchise } from '../../models'
import { franchiseMethod } from '../../redux/franchise/actions'

interface Props {
  navigation: any;
}

const FranchiseScreen = (props: Props) => {

  const { navigation } = props;

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataFranchises, setDataFranchises] = useState<Franchise[]>([]);

  useEffect(() => {
    (async function getListFranchise() {
      setDataFranchises(await franchiseMethod.getByUID("ok"));
    })().finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
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
              Mes franchises
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
        </ListItem.Content>
      </ListItem>

      { dataFranchises.map((franchise, i) => (
        <ListItem
          key={i}
          topDivider
          containerStyle={{
            backgroundColor: "#fdfdfd",
          }}
          onPress={() =>
            navigation.navigate(SCREENS.RESTAURANT_MENU, { franchise: franchise })
          }
        >
          <ListItem.Content style={{ marginLeft: 10 }}>
            <ListItem.Title style={{ fontWeight: "500" }}>
              {franchise.libelle}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );

}

export default FranchiseScreen;